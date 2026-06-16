#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..")

const SAFETY_DOC_PATHS = new Set([
  "README.md",
  "PROJECT_IDENTITY.md",
  "docs/deployment-notes.md",
  "docs/agent-safety-checklist.md",
  "scripts/verify-project-identity.mjs",
])

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "out", "build", ".vercel"])
const SKIP_FILES = new Set(["package-lock.json"])

const checks = []
let failed = false

function pass(label, detail = "") {
  checks.push({ status: "PASS", label, detail })
}

function fail(label, detail = "") {
  failed = true
  checks.push({ status: "FAIL", label, detail })
}

function read(relPath) {
  return readFileSync(join(ROOT, relPath), "utf8")
}

function includesAny(text, needles) {
  return needles.some((needle) => text.includes(needle))
}

function walkFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue
    const fullPath = join(dir, entry)
    const relPath = relative(ROOT, fullPath)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      walkFiles(fullPath, files)
    } else if (!SKIP_FILES.has(entry)) {
      files.push(relPath)
    }
  }
  return files
}

// 1. package.json name
try {
  const pkg = JSON.parse(read("package.json"))
  const name = pkg.name ?? ""
  if (/visionprint/i.test(name) || name === "visionprint-publishing-llc") {
    pass("package.json name", name)
  } else {
    fail("package.json name", `Expected visionprint-related name, got "${name}"`)
  }
} catch (error) {
  fail("package.json name", error.message)
}

// 2. layout.tsx title
try {
  const layout = read("src/app/layout.tsx")
  if (layout.includes("VisionPrint Publishing LLC")) {
    pass("layout.tsx title", "VisionPrint Publishing LLC found")
  } else {
    fail("layout.tsx title", "Missing VisionPrint Publishing LLC in metadata")
  }
} catch (error) {
  fail("layout.tsx title", error.message)
}

// 3. page.tsx forbidden content
try {
  const page = read("src/app/page.tsx")
  const forbidden = [
    "Crown Exotic Cars",
    "CPMM",
    "Crown Precision Mold",
    "crownexoticcars.com",
  ]
  const hits = forbidden.filter((term) => page.includes(term))
  if (hits.length === 0) {
    pass("page.tsx content", "No Crown/CPMM content")
  } else {
    fail("page.tsx content", `Forbidden terms found: ${hits.join(", ")}`)
  }
} catch (error) {
  fail("page.tsx content", error.message)
}

// 4. Repo-wide forbidden references (except safety docs)
const crownDomainPattern = /crownexoticcars\.com/i
const crownNamePattern = /Crown Exotic Cars/i
const forbiddenLeaks = []

for (const relPath of walkFiles(ROOT)) {
  if (SAFETY_DOC_PATHS.has(relPath.replace(/\\/g, "/"))) continue
  let content
  try {
    content = read(relPath)
  } catch {
    continue
  }
  if (crownDomainPattern.test(content)) {
    forbiddenLeaks.push(`${relPath}: crownexoticcars.com`)
  }
  if (crownNamePattern.test(content)) {
    forbiddenLeaks.push(`${relPath}: Crown Exotic Cars`)
  }
}

if (forbiddenLeaks.length === 0) {
  pass("repo scan", "No Crown references outside safety docs")
} else {
  fail("repo scan", forbiddenLeaks.slice(0, 10).join("; "))
}

// 5. .vercel/project.json
const vercelProjectPath = ".vercel/project.json"
if (existsSync(join(ROOT, vercelProjectPath))) {
  try {
    const vercel = JSON.parse(read(vercelProjectPath))
    if (vercel.projectName === "visionprint-publishing-llc") {
      pass(".vercel/project.json", `projectName=${vercel.projectName}`)
    } else if (vercel.projectName === "crown-exotic-cars") {
      fail(".vercel/project.json", "Points to crown-exotic-cars — run vercel link in VisionPrint folder")
    } else {
      fail(".vercel/project.json", `Unexpected projectName: ${vercel.projectName}`)
    }
  } catch (error) {
    fail(".vercel/project.json", error.message)
  }
} else {
  pass(".vercel/project.json", "Not present (gitignored) — link before deploy: vercel link --project visionprint-publishing-llc")
}

// Report
console.log("")
console.log("VisionPrint Publishing LLC — identity verification")
console.log("=".repeat(52))
for (const check of checks) {
  const icon = check.status === "PASS" ? "✓" : "✗"
  console.log(`${icon} ${check.status}  ${check.label}`)
  if (check.detail) console.log(`         ${check.detail}`)
}
console.log("=".repeat(52))
if (failed) {
  console.log("RESULT: FAIL — fix issues above before deploying.")
  process.exit(1)
}
console.log("RESULT: PASS — safe to proceed with build/deploy checks.")
process.exit(0)
