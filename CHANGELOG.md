# Changelog

All notable changes to this site are recorded here. Versioning follows
[Semantic Versioning](https://semver.org) (`MAJOR.MINOR.PATCH`). The version in
[`package.json`](package.json) is the single source of truth and is shown in the
site footer. See the release process in [CLAUDE.md](CLAUDE.md#versioning).

## [0.1.0] — 2026-06-24

First tracked release. The site is pre-1.0 and under active development.

### Added
- Version surfaced in the footer, injected from `package.json` at build time
  (via the Vite `__APP_VERSION__` constant).
- This changelog.

### Changed
- Cleaned up the codebase: removed dead CSS, unused content data, and redundant
  comments; trimmed remaining comments to non-obvious intent only.
- Restructured docs into a human-facing `README.md` and an AI-facing `CLAUDE.md`
  (replacing `DEVELOPMENT.md`).
