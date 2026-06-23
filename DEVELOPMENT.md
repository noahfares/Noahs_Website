# Development Guide

This document explains how the site is structured so future changes are quick
and safe. It's written for both Noah and any AI assistant working on the code.

---

## 1. Tech stack

| Tool                                      | Why                                                            |
| ----------------------------------------- | -------------------------------------------------------------- |
| **[Vite](https://vitejs.dev)**            | Dev server + bundler. Instant startup and hot reload.          |
| **[React](https://react.dev)**            | Component-based UI. Each section is an isolated component.      |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth, declarative animations (the Apple-style reveals). |

No CSS framework — styling is plain CSS with design tokens (variables), kept
next to each component.

---

## 2. Project map

```
Noahs_Website/
├── index.html              # Page shell. <title>, <meta>, mounts the app.
├── package.json            # Dependencies + npm scripts.
├── vite.config.js          # Dev server config (port 5173, auto-open browser).
├── public/
│   └── favicon.svg         # Browser-tab icon (the "N" mark).
└── src/
    ├── main.jsx            # React entry point — mounts <App> into index.html.
    ├── App.jsx             # Lists every section in page order.
    │
    ├── data/
    │   └── content.js      # ⭐ ALL editable text/links/lists live here.
    │
    ├── styles/
    │   └── global.css      # Design tokens (colors, fonts, spacing) + resets.
    │
    └── components/
        ├── Reveal.jsx      # Reusable scroll-into-view animation wrapper.
        ├── Navbar.jsx/.css # Sticky frosted-glass top nav.
        ├── Hero.jsx/.css   # Full-screen opening section.
        ├── About.jsx/.css  # Intro paragraphs + stat cards.
        ├── Work.jsx/.css   # Project cards (dark section).
        ├── Skills.jsx/.css # Grouped skill lists.
        ├── Contact.jsx/.css# Closing call-to-action (dark section).
        └── Footer.jsx/.css # Copyright + back-to-top.
```

**Rule of thumb:** every component owns a `.jsx` (markup + logic) and a `.css`
(its styles). Shared/global styling lives in `src/styles/global.css`.

---

## 3. The two files that matter most

### `src/data/content.js` — what the site says
Every headline, paragraph, project, skill, and link. Editing here changes the
page without touching any component. Fully commented.

### `src/styles/global.css` — how the site looks (globally)
The `:root` block at the top defines **design tokens** as CSS variables:

```css
--color-accent: #0071e3;   /* the blue used for links & primary buttons */
--color-text:   #1d1d1f;   /* primary text color */
--max-width:    1120px;    /* content width */
```

Change a token once and it updates everywhere it's used.

---

## 4. How animations work

The signature "content rises into view on scroll" effect is the **`Reveal`**
component (`src/components/Reveal.jsx`). Wrap anything in it:

```jsx
<Reveal delay={0.1}>
  <h2>This fades + slides up when scrolled into view.</h2>
</Reveal>
```

- `delay` — stagger multiple items (0, 0.1, 0.2, …).
- `y` — how far it travels (px).
- `as` — render as a different tag, e.g. `as="p"` or `as="h2"`.

The hero uses its own load-in stagger (see `Hero.jsx`); everything else uses
`Reveal`.

---

## 5. Common changes (recipes)

### ✏️ Change any text, project, or link
Edit **`src/data/content.js`**. Save. Done.

### 🎨 Change the accent color / fonts / spacing
Edit the variables in the `:root` block of **`src/styles/global.css`**.

### ➕ Add a new project card
Add an object to the `projects` array in `content.js`:
```js
{
  title: 'My New Project',
  category: 'Web',
  description: 'What it does and why it matters.',
  tags: ['React', 'Node'],
  link: 'https://example.com', // or '#' to hide the link
}
```

### 🧩 Add a whole new section
1. Create `src/components/MySection.jsx` + `MySection.css`
   (copy `Skills.jsx` as a template — it's the simplest).
2. Add its content to `content.js`.
3. Import and place it in `src/App.jsx` where you want it in the page order.
4. Add a nav link in `content.js` → `navLinks` whose `href` matches the
   section's `id` (e.g. `#my-section`).

### 🔀 Reorder or remove sections
Reorder/delete the components in `src/App.jsx`, and update `navLinks` in
`content.js` to match.

### 🌗 Make a section light or dark
Add the class `section--dark` to a section's wrapper for the dark treatment
(see `Work.jsx` / `Contact.jsx`). Plain `section` is light.

---

## 6. Deploying (when ready)

Run `npm run build` → outputs a static site to `dist/`. That folder can be
dropped onto any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
No server required.

---

## 7. Design principles being followed

- **Restraint:** lots of whitespace, few colors, one accent.
- **Typography-led:** large, tight-tracked headlines (system/SF font stack).
- **Soft motion:** everything eases with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Depth without clutter:** subtle shadows and hairline borders, not heavy UI.
- **Accessibility:** respects `prefers-reduced-motion`; semantic HTML.
