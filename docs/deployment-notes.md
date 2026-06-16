# Deployment notes — VisionPrint Publishing LLC

## Correct mapping

| Item | Value |
|------|-------|
| **Business** | VisionPrint Publishing LLC |
| **GitHub repo** | https://github.com/dowadud/visionprint-publishing-llc |
| **Vercel project** | `visionprint-publishing-llc` |
| **Production domain** | `visionprintpublishingllc.com` |
| **WWW** | `www.visionprintpublishingllc.com` → 308 redirect to apex |
| **Vercel preview/prod URL** | https://visionprint-publishing-llc.vercel.app |

## Domain rules

### This project owns

- `visionprintpublishingllc.com`
- `www.visionprintpublishingllc.com` (redirects to apex)

### Never attach to this project

- `crownexoticcars.com`
- `www.crownexoticcars.com`

### Never attach VisionPrint domains to

- Vercel project `crown-exotic-cars`
- Vercel project `starter-kit`
- Vercel project `cpmm`
- Any project other than `visionprint-publishing-llc`

## DNS notes

Registrar DNS (third-party nameservers are OK if records are correct):

| Host | Type | Value |
|------|------|-------|
| `@` | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` (preferred) |

**Current state:** Nameservers may remain on parking DNS (e.g. `aster.dns-parking.com`, `helios.dns-parking.com`) as long as the **A/CNAME records above resolve correctly** and Vercel shows the domains as **verified**.

Do not change Crown Exotic Cars DNS when working on VisionPrint.

## Protected unrelated project

**Crown Exotic Cars**

- Vercel: `crown-exotic-cars`
- Domains: `crownexoticcars.com`, `www.crownexoticcars.com`

Do not remove, redeploy, rename, or modify Crown when working on VisionPrint.

## Before every deploy

```bash
npm run verify:identity
npm run build
```

See [agent-safety-checklist.md](./agent-safety-checklist.md).
