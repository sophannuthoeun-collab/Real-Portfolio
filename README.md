# Portfolio (React + TypeScript + Tailwind)

Modern portfolio built with React 18, TypeScript, and Tailwind CSS.

## Features

- **React + TypeScript** — Typed components and data
- **Tailwind CSS** — Utility-first styling, dark mode via `class`
- **Sections**: Hero, About, Skills (with expertise images), Projects (filterable cards), Services, Testimonials, Contact
- **Project cards** — Clear layout: image, category badge, title, description, “View project” link
- **Skills** — Each skill has an image identifying the expertise area (frontend, backend, design, tools)
- Theme toggle (persisted in `localStorage`), smooth scroll, mobile menu, contact form

## Setup

```bash
cd portfolio-react
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Customize

- **Content**: Edit `src/data.ts` for projects, skills, testimonials.
- **Copy**: Update name, tagline, contact, and social links in the relevant components.
- **Skills images**: Change `image` and `alt` in `src/data.ts` for each skill.
- **Resume**: Add `resume.pdf` in the `public` folder so “Download CV” works.
