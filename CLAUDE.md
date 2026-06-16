# Starter Kit — Claude Instructions

This is the base template for all website projects. When working inside a project cloned from this starter-kit, follow these conventions.

## Project structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout — update metadata here first
│   ├── page.tsx        # Home page — replace sample content
│   └── globals.css     # Global styles + @layer components
└── components/
    └── ui/             # Reusable UI components (Button, Card, etc.)
```

## First steps after cloning
1. Update `metadata` in `src/app/layout.tsx` (title + description)
2. Replace `src/app/page.tsx` with real homepage content
3. Add project-specific env vars to `.env.local`

## Component conventions
- One component per file, named in PascalCase
- All components in `src/components/ui/` are reusable, dumb, and prop-driven
- Page-specific components live next to their page file
- Use Tailwind exclusively for styling

## Do not
- Add a `pages/` directory (App Router only)
- Import CSS modules
- Add `console.log` statements
- Modify this starter-kit directly — work in `projects/<name>/` only
