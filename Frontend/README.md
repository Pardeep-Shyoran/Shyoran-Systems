# Shyoran Systems — Production Frontend

![license](https://img.shields.io/badge/license-MIT-blue)
![vite](https://img.shields.io/badge/bundler-Vite-brightgreen)
![react](https://img.shields.io/badge/framework-React_19-61DAFB)
![architecture](https://img.shields.io/badge/stack-MERN_%2B_AI-FFE600)

Production web platform and client portal for **Shyoran Systems**, a software engineering studio specializing in high-velocity MERN stack (MongoDB, Express, React 19, Node.js) web applications and AI/LLM-integrated systems shipped in days and weeks.

---

## Architecture Overview

```
Frontend/
├── index.html                   # HTML5 entry with Google Fonts & custom branded SVG favicon
├── vite.config.js               # Vite bundler configuration
├── package.json                 # Project dependencies & scripts
├── public/
│   └── favicon.svg              # Shyoran Systems neo-brutalist lightning bolt mark
└── src/
    ├── main.jsx                 # React 19 DOM entry & BrowserRouter setup
    ├── App.jsx                  # Root component with ScrollToTop & MainRoutes
    ├── index.css                # Neo-brutalist design tokens (colors, shadows, fonts, utilities)
    ├── api/
    │   └── axiosconfig.js       # Centralized axios client with timeout & interceptors
    ├── hooks/
    │   └── useScrollReveal.js   # Reusable IntersectionObserver hook for .reveal animations
    ├── components/
    │   ├── Layout/
    │   │   ├── AppLayout.jsx    # Unified layout shell (Header + Outlet + Footer)
    │   │   └── AppLayout.module.css
    │   ├── Header/              # Sticky header with mobile drawer, backdrop, & portal link
    │   ├── Footer/              # High-contrast footer with system status indicator
    │   ├── Logo/                # Branded S-Bolt logo with inverted state
    │   ├── Icons/               # Zero-bloat centralized SVG icon library (React, Node, Mongo, etc.)
    │   ├── Hero/                # Hero section with interactive architecture terminal
    │   ├── BentoGrid/           # Interactive live API & AI simulator testbench
    │   ├── Tracks/              # 3 core delivery tracks with blueprint dossiers
    │   ├── ProcessTimeline/     # 4-stage sprint execution roadmap
    │   ├── Comparison/          # Traditional agency vs. Shyoran Systems breakdown
    │   ├── Faq/                 # Accessible accordion with keyboard navigation
    │   ├── MonolithCta/         # High-impact conversion banner
    │   ├── MarqueeTicker/       # Infinite velocity ticker
    │   └── ScrollToTop/         # Route change scroll position reset
    ├── pages/
    │   ├── Home/                # Studio landing page overview
    │   ├── Services/            # 5 engineering pillars & architecture specifications
    │   ├── Work/                # Interactive case studies with live delivery metrics
    │   ├── Pricing/             # Fixed-scope investment tracks & custom sprint calculator
    │   ├── About/               # Lead architect dossier, principles, & tech inventory
    │   ├── Contact/             # Dynamic interactive scope & budget builder (IST time indicator)
    │   ├── Login/               # Founder Staging Hub & sprint inspection portal (/portal)
    │   ├── Register/            # Sprint onboarding & reservation page
    │   └── PageNotFound/        # Interactive 404 codebase diagnostic terminal
    └── routes/
        └── MainRoutes.jsx       # Nested React Router route definitions inside AppLayout
```

---

## Route Sitemap

| Route | Description |
| :--- | :--- |
| `/` | **Home**: Studio value proposition, interactive blueprint terminal, Bento grid, FAQ, & comparison |
| `/services` | **Engineering Catalog**: 5 Core pillars (MERN, AI/LLM, Commerce, Real-Time, Cloud) |
| `/work` | **Case Studies**: Real production systems, performance benchmarks, and architecture blueprints |
| `/pricing` | **Investment Tracks**: Transparent sprint tiers & dynamic custom cost/timeline estimator |
| `/about` | **Founder Dossier**: Operating principles, direct engineer access, full tech inventory |
| `/contact` | **Project Scoping**: Real-time IST clock, custom scope pills, and instant inquiry dispatcher |
| `/portal` / `/login` | **Founder Hub**: Private client portal for staging previews & sprint milestone inspection |
| `*` | **404 Diagnostic**: Interactive neo-brutalist gateway error terminal |

---

## Development & Build Commands

```bash
# Install dependencies
npm install

# Run Vite development server
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Design System

The application uses an authentic **Neo-Brutalist** aesthetic characterized by:
- **Palette**: Canvas cream (`#FAF9F5`), Card white (`#FFFFFF`), Deep stark black (`#0A0D14`), Electric blue (`#0038FF`), High-voltage yellow (`#FFE600`), and Status green (`#00E676`).
- **Typography**: `Bebas Neue` (display titles), `Plus Jakarta Sans` (body & UI), `JetBrains Mono` (code & badges), `Caveat` (annotations).
- **Shadows**: Hard-edge brutalist offset shadows (`2px 2px 0px #0A0D14`, `4px 4px 0px #0A0D14`).
- **Zero Raw Emojis**: 100% vector SVGs for crisp rendering on high-DPI displays.

---

## License

MIT © [Pardeep Shyoran](https://github.com/Pardeep-Shyoran)
