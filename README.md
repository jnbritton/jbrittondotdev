# jackbritton.dev

A minimalist personal site and creative portfolio for me to host my dumb things. I built it with React, Vite, and Tailwind CSS.

## Overview

The site features a dithered topographical animation on the home page, a projects gallery, and a detailed portfolio entry for *Zero One One* — a D&D character art concept set in a sci-fi western world.

## Structure

```
src/
├── components/      # Shared UI and layout components
├── pages/           # React route pages (Home, Projects, Zero One One)
├── assets/          # Static images and media
├── lib/             # Utility functions
└── main.tsx         # App entry point
```

## Tech

- React 18 + TypeScript  
- Vite build system  
- Tailwind CSS for styling  
- Radix UI primitives + Lucide icons  
- GitHub Pages for deployment  

## Development

```bash
npm install
npm run dev
```

## Deployment

Automatically built and deployed via GitHub Actions → GitHub Pages.  
Custom domain: **jackbritton.dev**
