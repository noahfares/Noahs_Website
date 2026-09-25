# Noah Fares — shared visual system

The website and hub share an engineering notebook identity: the original off-white surfaces, near-black text, blue accents, fine grid lines and JetBrains Mono everywhere. Dark mode uses near-black surfaces and bright blue accents. Keep the hub focused on its existing tasks; reuse this visual language without copying the portfolio layout.

## Portable source

`src/styles/theme.css` is the framework-independent source of truth. Import it before application styles. Load JetBrains Mono weights 400, 500, 600 and 700 using the font link in `index.html`. The fallback stack includes Cascadia Code, Consolas and monospace. `--font-sans` intentionally aliases the mono stack for older consumers.

Set `data-theme="light"` or `data-theme="dark"` on the root HTML element. Set the preference before the application renders and persist it under the `theme` localStorage key. This shares preferences only on the same origin; a hub on another subdomain needs its own preference storage or an explicitly designed synchronization mechanism.

## Component mapping for the hub

| Hub element | Website equivalent / tokens |
| --- | --- |
| App shell | `--color-bg`, `--color-text`, `--font-mono` |
| Sidebar / top bar | `--color-bg-alt`, 1px `--color-border` |
| Workspace panels | `--card-bg`, `--card-border`, `--radius-md` |
| Primary action | `--color-accent` background, `--color-on-accent` text |
| Secondary action | Background surface, border, text; 4px radius |
| Selected navigation | `--color-highlight` background, `--color-accent` text |
| Labels / metadata | `--color-text-soft`; 12–13px in dense workflows |
| Inputs / tables | Inherit mono font; visible borders and 2px accent focus ring |

Use the 8px spacing scale in the token file. Reserve larger typography and decorative circuit grids for landing or empty states. In the hub, prioritize readable table density and clear form labels. Keep semantic error/warning/success colors separate from the brand accent and retain icons or text so color is never the only signal.

## Interaction and accessibility

Use visible focus outlines, real links and buttons, sufficient contrast, and text labels for icons. Interactive selections must expose their state (for example aria-pressed). Respect prefers-reduced-motion. Stack panels on small screens; keep every navigation destination available. Do not replace functioning hub workflows with portfolio components.

## Migration status

The website imports these tokens today. The hub code is not present in this checkout; applying the theme there requires its repository/folder and route information. No hub functionality or deployment has been changed.
