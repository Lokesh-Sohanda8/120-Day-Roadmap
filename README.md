# Learn & Build — 120-Day Command Center

A GitHub Pages-ready, local-first learning tracker built around:

**Learn → Practice → Build → Ship → Reflect**

## Included

- 120-day roadmap with Sheryians AI School as a parallel learning resource.
- Daily checklist + learning journal.
- Separate learning, practice, building, shipping and revision tracking.
- Current and longest streaks.
- 8 milestone progression and phase analytics.
- 120-day activity heatmap.
- Project pipeline with status, progress, next action and URL.
- Weekly reviews.
- Spaced-repetition review queue (1 / 3 / 7 / 21 days).
- Knowledge vault and question backlog.
- **Today’s Top 3** priorities.
- **Focus sessions** (25 / 50 / 90 min) for learning, building or revision.
- **Pace check** for catching up after skipped/open days.
- JSON export/import backup.
- Light/dark theme.
- Offline/PWA support.
- No server, database or build step required.

## Fixed in this release

- Restored the missing core functions required by the dashboard and modals: `dueReviews`, `markReview`, `projectById`, `generateDayFlow`, and `phaseStats`.
- Added a UUID fallback for browsers/contexts where `crypto.randomUUID()` is unavailable.
- Added `questionStatus` to the default/migration state so the question backlog is stable.
- Bumped the service-worker cache name so GitHub Pages clients do not keep the broken cached JavaScript.
- ZIP contents are at the repository root for direct GitHub Pages deployment.

## GitHub Pages

Upload the files in this ZIP to the **root of your GitHub repository**. Enable **Settings → Pages → Deploy from branch** and choose the main branch and root directory.

## Data storage

All progress is stored in browser `localStorage`. Export a JSON backup regularly, especially before switching devices or browsers.
