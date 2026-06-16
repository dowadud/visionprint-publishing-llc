# Agent safety checklist — VisionPrint Publishing LLC

Complete **every item** before deploying, linking Vercel, or changing domains.

## Identity

- [ ] **Folder path** is `/Users/nadhirwadud/Web design/projects/visionprint-publishing-llc/`
- [ ] **GitHub repo** is `dowadud/visionprint-publishing-llc` (not `crown-exotic-cars`, not `starter-kit`, not `cpmm`)
- [ ] **Vercel project** is `visionprint-publishing-llc` (not `crown-exotic-cars` or any other project)
- [ ] **Production domain** is `visionprintpublishingllc.com`
- [ ] **WWW** is `www.visionprintpublishingllc.com` redirecting to apex

## Protected domains (do not attach to this project)

- [ ] Do **not** add `crownexoticcars.com` to VisionPrint
- [ ] Do **not** add `www.crownexoticcars.com` to VisionPrint
- [ ] Do **not** add VisionPrint domains to `crown-exotic-cars`

## Content sanity

- [ ] No **Crown Exotic Cars** files or copy in `src/`
- [ ] No **CPMM** / **Crown Precision Mold** content in `src/`
- [ ] `src/app/layout.tsx` title is **VisionPrint Publishing LLC**
- [ ] `src/app/page.tsx` renders VisionPrint sections (Navbar, Hero, Services, etc.)

## Vercel link

- [ ] If `.vercel/project.json` exists, `projectName` is `visionprint-publishing-llc`
- [ ] `.vercel/project.json` does **not** reference `crown-exotic-cars`

## Automated checks

```bash
npm run verify:identity
npm run build
```

- [ ] `verify:identity` prints **PASS**
- [ ] `npm run build` succeeds

## Live preview

- [ ] Local or preview URL shows **VisionPrint Publishing LLC** branding
- [ ] Page does **not** show exotic cars, mold/CNC, or Crown content

## Domain changes

- [ ] **No domain changes** unless the human explicitly approved them in the current task
- [ ] Crown Exotic Cars was **not** redeployed, renamed, or domain-modified as part of this work

## If anything fails

Stop. Do not deploy. Read [PROJECT_IDENTITY.md](../PROJECT_IDENTITY.md) and [deployment-notes.md](./deployment-notes.md).
