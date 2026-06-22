# Portfolio

A minimalist, terminal-flavored portfolio built with React, React Router, and
Tailwind v4. Features a crosshair cursor, staggered text reveals, hover link
previews, real client-side routing, and full keyboard/reduced-motion support.

## Setup and Development

### Prerequisites

- Node.js v18+
- pnpm (recommended) or npm

### Installation

```bash
git clone https://github.com/Ryomensukuna2003/Portfolio && cd Portfolio && pnpm install && npm run dev
```

## Project Structure

```
src/
├── assets/            # Images and the GeistMono font
├── components/ui/     # Reusable UI components (grid, text-animate, link-preview, …)
├── lib/               # Utility functions (cn)
├── Pages/             # Route components (Home, About, Work, Contact, NotFound)
├── layout.jsx         # Root layout: custom cursor, analytics, toaster
├── Footer.jsx         # Primary navigation
└── App.jsx            # Routes
```

