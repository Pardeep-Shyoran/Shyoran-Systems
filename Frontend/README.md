# React Template

![license](https://img.shields.io/badge/license-MIT-blue)
![vite](https://img.shields.io/badge/bundler-Vite-brightgreen)
![react](https://img.shields.io/badge/framework-React-61DAFB)

A small, opinionated React + Vite starter template to quickly bootstrap single-page applications. This repo provides a minimal, well-organized structure (pages, components, routes, API config) so you can start building features fast.

## Table of contents

- Quick start
- Scripts
- What's included
- Project structure
- Environment variables
- Adding pages & components
- API configuration
- Testing & CI (recommended)
- Contributing
- License
- Maintainers

## Quick start

Prerequisites

- Node.js (recommended 18+)
- npm (or yarn / pnpm)

Install dependencies

```bash
npm install
```

Run the dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

Run linter

```bash
npm run lint
```

## Scripts

The following scripts are defined in `package.json`:

- `dev` — start Vite development server
- `build` — build for production with Vite
- `preview` — preview the production build locally
- `lint` — run ESLint across the project

## What's included

- Vite + React (fast HMR and dev server)
- React Router for client-side routing
- CSS Modules for component-scoped styles
- Centralized axios configuration at `src/api/axiosconfig.jsx`
- Example folder layout for pages and components

## Project structure (high-level)

- `index.html` — Vite HTML entry
- `vite.config.js` — Vite configuration
- `package.json` — scripts & dependencies
- `src/`
    - `main.jsx` — React entry
    - `App.jsx` — application wrapper
    - `index.css` — global styles
    - `api/axiosconfig.jsx` — axios instance & interceptors
    - `components/` — reusable components. Example:
        - `Header/` — `Header.jsx`, `Header.module.css`
        - `NavBar/` — `NavBar.jsx`, `NavBar.module.css`
        - `Logo/` — `Logo.jsx`, `Logo.module.css`
    - `pages/` — route pages. Example:
        - `Home/` — `Home.jsx`, `Home.module.css`
        - `Login/` — `Login.jsx`, `Login.module.css`
        - `Register/` — `Register.jsx`, `Register.module.css`
        - `PageNotFound/` — 404 page
    - `routes/MainRoutes.jsx` — route definitions

This structure keeps UI modular and easy to extend.

## Using this template

You can use this repository as a GitHub template or clone it directly to start a new project.

Create a new repository from this template on GitHub (Use "Use this template"). Or clone locally and reinitialize:

```bash
git clone https://github.com/Pardeep-Shyoran/React-template my-app
cd my-app
rm -rf .git
git init
npm install
npm run dev
```

After cloning, make these initial changes to personalize your project (recommended):

- Update `package.json` name, version, and author fields.
- Update `README.md` title/description and add your project logo.
- Create a `.env.local` with your environment variables (don't commit secrets).
- Remove or replace any example/placeholder assets.
- Set up repository remote and push the initial commit.

## Styling

This template uses a small, practical styling system designed for component isolation and easy theming:

- CSS Modules (recommended): component-scoped styles live alongside components as `*.module.css` files (e.g. `Header.module.css`). Import them in components and use the exported class names:

```jsx
import styles from './Header.module.css';

export default function Header(){
  return <header className={styles.container}>...</header>;
}
```

- Global styles: use `src/index.css` for global rules, CSS resets, and CSS custom properties (design tokens).

- Theming: define CSS variables in `index.css` (or a `:root` tokens file) to support light/dark themes and easy color swapping. Toggle themes by adding a class like `theme-dark` to the document root or using a ThemeProvider pattern.

- Naming conventions: keep class names small and semantic in modules (e.g. `container`, `title`, `actions`). Avoid global class collisions by scoping UI-specific classes to module files.

- Optional tooling:
  - SASS/SCSS: If you prefer nested rules or variables, install `sass` and rename module files to `*.module.scss` (Vite supports this out of the box once `sass` is installed).
  - Utility-first CSS (Tailwind): You can replace or complement modules with Tailwind — install and configure Tailwind with PostCSS and include its base in `index.css`.
  - CSS-in-JS: Libraries like Emotion or styled-components are also compatible; prefer them only if you need runtime theming or dynamic styles.

- Best practices:
  - Keep components small and co-locate their styles with the component files.
  - Use CSS variables for colors, spacing, and type scales so they can be changed globally.
  - Use module class names for layout and structural rules, and keep utility classes (if used) globally documented.

Example: adding a color token to `src/index.css`:

```css
:root {
  --brand-500: #2563eb;
  --bg: #ffffff;
  --text: #111827;
}

body { background: var(--bg); color: var(--text); }
```

If you'd like, I can also add a short `STYLE_GUIDE.md` or small example tokens file and a screenshot demonstrating the default theme.


## Environment variables

Use Vite environment variables prefixed with `VITE_`. Add a file named `.env` or `.env.local` (do not commit secrets).

Suggested variables

- `VITE_API_URL` — the base URL used by `src/api/axiosconfig.jsx` (example: `https://api.example.com`)

Example in `src/api/axiosconfig.jsx`:

```js
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

Consider creating an `.env.example` with required variable names (no secrets):

```
# .env.example
VITE_API_URL=
# Optional:
# VITE_SENTRY_DSN=
# VITE_ANALYTICS_ID=
```

I will add `.env.example` to the repository so template consumers have a clear starting point.

## Adding pages

1. Create a folder `src/pages/YourPage/` containing `YourPage.jsx` and `YourPage.module.css`.
2. Export the component as default from `YourPage.jsx`.
3. Add a route in `src/routes/MainRoutes.jsx` mapping a path to your component.

Example route:

```jsx
import YourPage from '../pages/YourPage/YourPage';

// inside your route definitions
<Route path="/your-page" element={<YourPage />} />
```

## Adding components

1. Create `src/components/YourComponent/YourComponent.jsx` and `YourComponent.module.css`.
2. Keep styles scoped in the module file and import them as `styles`.

## API configuration

`src/api/axiosconfig.jsx` centralizes API settings: base URL, timeouts, and auth header handling. Import the configured axios instance where you need backend calls.

Example usage:

```js
import api from '../api/axiosconfig';

const res = await api.get('/users');
```

## Testing & CI (recommended)

- Add a testing framework: Vitest or Jest + React Testing Library.
- Add a GitHub Actions workflow to run `npm run lint`, `npm run build`, and tests on PRs.

## Contributing

- Please include a short description when opening PRs.
- Run `npm run lint` and fix issues before submitting.
- Consider adding `husky` + `lint-staged` to run linters on pre-commit.

You may want to add a `CONTRIBUTING.md` with branching/PR rules and a PR template.

## License

This project includes a `LICENSE` file in the repository root. Please follow the terms there.

## Maintainers

- Pardeep Shyoran (repo owner)

---

If you'd like, I can also:

- Add an `env.example` file to the repo
- Add recommended badges with real targets (CI / GitHub Actions)
- Add a basic GitHub Actions workflow (lint + build)
- Create `CONTRIBUTING.md` or `docs/` with screenshots

Which of the above should I add next? If you want, I can apply this README directly to `README.md` and also create `env.example` and a minimal GitHub Actions workflow in a follow-up patch.

Tell me which of those you'd like next.
