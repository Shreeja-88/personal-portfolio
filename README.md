# personal-portfolio

![License](https://img.shields.io/github/license/Shreeja-88/personal-portfolio)
![Issues](https://img.shields.io/github/issues/Shreeja-88/personal-portfolio)
![Last commit](https://img.shields.io/github/last-commit/Shreeja-88/personal-portfolio)

Static personal portfolio — a themed, interactive single-page site built with HTML, CSS and vanilla JavaScript.

This repository contains a static portfolio site showcasing projects, skills and an interactive "Escape the Server Room" mini-experience. The site is self-contained (no backend) and meant to be deployed as static files.

**Key Features**
- Themed site using CSS custom properties (light & dark modes).
- Interactive hero and animated wordmark.
- "Escape the Server Room" — a client-side 4-level puzzle experience implemented in `js/main.js` (progress persisted to `localStorage`).
- Sliding 3x3 puzzle included as a small mini-game.
- Downloadable vCard and resume links in `assets/`.
- Accessible, responsive layout with subtle ambient animations.

## Live preview / local usage

Clone the repo and open `index.html` in a browser (no server required):

```bash
git clone https://github.com/Shreeja-88/personal-portfolio.git
cd personal-portfolio
# Then open index.html in your browser (double-click or serve with a static server)
```

For a simple static server (optional):

```bash
# Python 3.x
python -m http.server 8000
# then visit http://localhost:8000
```

## Project structure (high level)

- `index.html` — main single-page markup.
- `css/` — stylesheets (`styles.css`, `animations.css`, `chatbot.css`).
- `js/` — site behaviour and games (`main.js` is the main entrypoint).
- `assets/` — images, icons, vCard and downloadable resume.
- `LICENSE` — repository license.

## Development notes

- No build step required for the site; edits to HTML/CSS/JS are reflected by reloading the page.
- The interactive puzzles and game state are implemented in `js/main.js`. Game progress is stored under the `serverroom_progress` key in `localStorage`.
- Icons: the site currently links to Font Awesome for iconography. If you remove that link, some inline icons will no longer display.

## Customization

- Theme colors are defined as CSS variables in `css/styles.css` under `:root` and `[data-theme="dark"]` — adjust these values to restyle the site.
- To change the hero copy, wordmark or game prompts, edit `index.html` and `js/main.js` respectively.

## Accessibility & Compatibility

- The site is written with progressive enhancement in mind: core content is HTML-first with JavaScript-powered enhancements.
- Tested in modern Chromium-based browsers; if you need older-browser polyfills, add them as needed.

## Contributing

- Feel free to open issues or PRs. For small visual tweaks, edit the CSS files; for game logic changes, modify `js/main.js`.

## Contact

- Developer: Shreeja Hebbar — links available in the site header and footer.

