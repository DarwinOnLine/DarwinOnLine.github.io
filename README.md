# Darwin On Line - Personal Blog

A multilingual static blog powered by [Quarkdown](https://github.com/DarwinOnLine/quarkdown) and GitHub Pages.

## Languages

- **French** (`/fr`) — default
- **English** (`/en`)
- Auto-detection based on browser language

## Project Structure

```
/
├── index.html              # Main HTML shell
├── 404.html                # 404 fallback (same Quarkdown init)
├── init.js                 # Quarkdown configuration & custom renderHome
├── styles.css              # Site-specific styles (imports Quarkdown theme)
├── build-og.js             # OG meta pages generator
├── server.py               # Custom dev server with 404 support
├── home-en.md              # English home page
├── home-fr.md              # French home page
├── src/                    # Quarkdown engine (copied from Quarkdown repo)
├── themes/
│   └── default.css         # Quarkdown default theme
├── posts/
│   ├── en/
│   │   ├── index.json      # English articles index
│   │   └── *.md            # English articles
│   └── fr/
│       ├── index.json      # French articles index
│       └── *.md            # French articles
└── assets/
    └── images/
```

## Adding a New Article

### 1. Create the Markdown file

- **English**: `posts/en/my-new-article.md`
- **French**: `posts/fr/mon-nouvel-article.md`

### 2. Add to index

Edit `posts/{lang}/index.json`:

```json
{
  "slug": "my-new-article",
  "title": "My New Article",
  "date": "2026-02-04",
  "description": "Short description",
  "tags": ["Tech"],
  "i18nSlugs": { "fr": "mon-nouvel-article" }
}
```

The `i18nSlugs` field maps each translated language to its corresponding slug.

## Local Development

```bash
python3 server.py
# → http://localhost:8000
```

## OG Meta Pages

OG pages are rebuilt automatically on each commit via a pre-commit hook.

To rebuild manually:

```bash
node build-og.js
```

## Customization

### Theme

Override CSS custom properties in `styles.css`:

```css
:root {
  --qd-accent: #ff3333;
  --qd-bg: #111;
  --qd-heading: #fff;
}
```

See `themes/default.css` for all available variables.

### Translations

Edit the `translations` object in `init.js`.

### Site-specific styles

`styles.css` imports the Quarkdown theme and adds site-specific styles (home header, avatar, social links).

## Deployment

1. Push to `main`
2. GitHub Pages serves from `main` / `root`
3. Live at `https://darwinonline.github.io`
