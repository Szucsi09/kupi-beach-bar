# KuPi Beach Bar

Next.js landing page for KuPi Beach Bar — set up for [Vercel v0](https://v0.app) and Vercel deployment.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (`components.json` ready for `npx shadcn@latest add …`)

Brand styles live in `src/app/globals.css`. Page sections are in `src/components/kupi/`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Use with v0

1. Push this repo to GitHub.
2. In [v0](https://v0.app), start a new chat → **Git Import** → paste your repo URL.
3. Choose or create a Vercel project when prompted.
4. Edit sections via chat; v0 works best with the `src/components/kupi/` folder and `components.json` for new UI.

### Design tokens (for prompts in v0)

| Role | Hex |
|------|-----|
| Türkiz (primary) | `#34ccd7` |
| Lime (accent / CTA) | `#bbdd1e` |
| Deep text | `#0a4a4e` |
| Sand background | `#f7f5f0` |

Fonts: **Pacifico** (display), **DM Sans** (body).

## Deploy on Vercel

Connect the GitHub repo in the Vercel dashboard (framework: **Next.js**). No extra build command is required.

## Legacy files

- `KuPi Beach Bar.html` — original static export (reference)
- `images/` — source assets; runtime copies are in `public/images/`
