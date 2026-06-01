# Umair Engineering Portfolio

Premium aerospace engineering portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**.

## Design System — Aerospace Blueprint Noir

| Token | Value |
|---|---|
| Background | `#060B18` near-black navy |
| Accent Cyan | `#00D4FF` |
| Accent Green | `#06FFA5` |
| Accent Amber | `#FFB800` |
| Display Font | Orbitron |
| Body Font | IBM Plex Sans |
| Mono Font | IBM Plex Mono |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Design system CSS variables + utilities
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx         # Blueprint animation hero + avatar
│   │   ├── AboutSection.tsx        # Education timeline
│   │   ├── ExpertiseSection.tsx    # 8 expertise cards
│   │   ├── SoftwareSection.tsx     # Skill bars + badge cloud
│   │   ├── ServicesSection.tsx     # 8 service cards
│   │   ├── ProjectsSection.tsx     # Dynamic projects + modal + filters
│   │   ├── MetricsSection.tsx      # Animated counters
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── ContactSection.tsx      # Contact form
│   │   └── FooterSection.tsx       # Footer
│   └── ui-custom/
│       └── NavBar.tsx              # Sticky nav with active section tracking
├── data/
│   └── projects.ts         # All project data (scalable)
├── public/
│   └── projects/
│       ├── project1/       # img-1.jpg … img-8.jpg
│       ├── project2/ … project6/
└── vercel.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding New Projects

1. Add images to `public/projects/projectN/img-1.jpg` etc.
2. Add an entry to `data/projects.ts` following the `Project` interface.
3. No other code changes needed — projects load dynamically.

## Deploy to Vercel

```bash
npx vercel --prod
```

Or push to GitHub and import via the Vercel dashboard. `vercel.json` is already configured.

## Wiring Up the Contact Form

The contact form currently simulates a send. Replace the `handleSubmit` in `ContactSection.tsx`:

**Formspree (simplest):**
```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Send failed");
```

## SEO Keywords Targeted

`CFD Engineer` · `FEA Engineer` · `ANSYS Expert` · `Thermal Engineer` · `Aeronautical Engineer` · `Engineering Consultant` · `Online Engineering Tutor`
