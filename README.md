# VisionPrint Publishing LLC

Marketing landing page for **VisionPrint Publishing LLC** — book writing, editing, publishing, and marketing services.

## Warning

**This project is not Crown Exotic Cars, not CPMM, and not starter-kit.**

Do not repurpose this repository, Vercel project, or domains for another business. See [PROJECT_IDENTITY.md](./PROJECT_IDENTITY.md) and [docs/agent-safety-checklist.md](./docs/agent-safety-checklist.md) before any deploy or domain change.

## Project identity

| Field | Value |
|-------|-------|
| **Business** | VisionPrint Publishing LLC |
| **Local folder** | `/Users/nadhirwadud/Web design/projects/visionprint-publishing-llc/` |
| **GitHub repo** | https://github.com/dowadud/visionprint-publishing-llc |
| **Vercel project** | `visionprint-publishing-llc` |
| **Production domain** | https://visionprintpublishingllc.com |
| **WWW** | https://www.visionprintpublishingllc.com → redirects to apex |
| **Vercel URL** | https://visionprint-publishing-llc.vercel.app |

## Contact

- **Phone:** 704-724-6732
- **Email:** info@visionprintpublishingllc.com
- **Address:** 13534 Plazard Extension, Charlotte, NC 28215

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pre-deploy checks

Run before every deploy or handoff to another agent:

```bash
npm run verify:identity
npm run build
```

Both must pass. Do not change Vercel domains without explicit human approval.

## Related docs

- [PROJECT_IDENTITY.md](./PROJECT_IDENTITY.md) — non-negotiable project boundaries
- [docs/deployment-notes.md](./docs/deployment-notes.md) — domains, DNS, Vercel mapping
- [docs/agent-safety-checklist.md](./docs/agent-safety-checklist.md) — required agent checklist

## Protected unrelated project (do not touch)

**Crown Exotic Cars** — separate repo and Vercel project `crown-exotic-cars`.

Protected domains (never attach to this project):

- crownexoticcars.com
- www.crownexoticcars.com
