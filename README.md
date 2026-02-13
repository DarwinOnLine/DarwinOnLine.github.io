# Darwin On Line - Personal Blog

A simple, multilingual static blog powered by Markdown, marked.js, and GitHub Pages.

## 🌍 Languages

- **English** (`#/en`)
- **French** (`#/fr`)
- Auto-detection based on browser language (fallback: English)

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── app.js                  # Blog application logic with routing
├── i18n.js                 # Internationalization config
├── styles.css              # Global styles
├── server.py               # Custom dev server with 404 support
├── home-en.md              # English home page
├── home-fr.md              # French home page
├── 404.html                # 404 error page with stars animation
├── posts/
│   ├── en/                 # English articles
│   │   ├── index.json      # English articles index
│   │   ├── hello-world.md
│   │   ├── image-examples.md
│   │   └── code-examples.md
│   └── fr/                 # French articles
│       ├── index.json      # French articles index
│       ├── bonjour-monde.md
│       └── exemples-images.md
└── assets/
    └── images/             # Images for articles and pages
        └── README.md
```

## ✍️ Adding a New Article

### 1. Create the Markdown file

**English**: `posts/en/my-new-article.md`
**French**: `posts/fr/mon-nouvel-article.md`

### 2. Add to index

**English**: Edit `posts/en/index.json`:
```json
{
  "slug": "my-new-article",
  "title": "My New Article",
  "date": "2026-02-04",
  "description": "Short description"
}
```

**French**: Edit `posts/fr/index.json`:
```json
{
  "slug": "mon-nouvel-article",
  "title": "Mon Nouvel Article",
  "date": "2026-02-04",
  "description": "Courte description"
}
```

## 🖼️ Using Images

Place images in `/assets/images/` and reference them:

```markdown
![Alt text](/assets/images/my-image.jpg)
```

Or with HTML for more control:

```html
<img src="/assets/images/my-image.jpg"
     alt="Description"
     style="max-width: 500px; border-radius: 8px;" />
```

## 💻 Code Blocks

### Basic Syntax Highlighting

````markdown
```javascript
console.log('Hello World!');
```
````

### With Line Numbers

Use HTML with `data-line-numbers` attribute:

```html
<pre data-line-numbers><code class="language-javascript">
function test() {
  return true;
}
</code></pre>
```

### Supported Languages

`javascript`, `python`, `php`, `css`, `html`, `bash`, `sql`, `typescript`, `json`, `go`, `rust`, and more.

## 🎨 Interactive Code

### Executable JavaScript

```html
<button id="demo">Click me</button>

<script>
document.getElementById('demo').addEventListener('click', () => {
  alert('It works!');
});
</script>
```

### Custom CSS Styling

```html
<style>
.custom-box {
  background: linear-gradient(45deg, #667eea, #764ba2);
  padding: 2rem;
  border-radius: 8px;
}
</style>

<div class="custom-box">Styled content</div>
```

### Canvas Animations

```html
<canvas id="my-canvas" width="400" height="200"></canvas>

<script>
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
// Your animation code here
</script>
```

## 🚀 URLs & Routing

The site uses hash-based routing:

- `#/` - Home (auto-detects language)
- `#/en` - English home page
- `#/fr` - French home page
- `#/en/blog` - English blog list with pagination
- `#/fr/blog` - French blog list with pagination
- `#/en/blog/article-slug` - English article
- `#/fr/blog/article-slug` - French article

## 🎭 404 Page

The 404 page features a stunning stars animation with hyperspace effect:
- **Static URLs**: `/any-invalid-url` → serves `404.html`
- **Hash routes**: `#/invalid-route` → inline 404 with stars animation
- Click "BACK HOME" for hyperspace warp effect

## 🧪 Local Development

### Option 1: Custom server (recommended)

Supports custom 404 page:

```bash
python3 server.py 8000
```

### Option 2: Standard Python server

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`

**Note**: The standard server won't serve custom 404 pages locally, but they work on GitHub Pages.

## 🎨 Customization

### Colors

Edit `styles.css`:
- Background: `#171515` (dark)
- Text: `#e8e6e3` (light gray)
- Accent: `#ffa657` (orange)
- Code: `#0d0d0d` (darker black)

### Translations

Edit `i18n.js` to add/modify UI translations for:
- Navigation labels
- Pagination buttons
- Error messages
- Date formats

### Posts per page

Edit `app.js`, change:
```javascript
this.postsPerPage = 10;
```

### Syntax highlighting theme

Edit `index.html` to change Highlight.js theme:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
```

Available themes: `github-dark`, `monokai`, `atom-one-dark`, `nord`, etc.

## 📦 Deployment to GitHub Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Update blog"
git push origin main
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`

3. Your site will be live at `https://yourusername.github.io`

## 🔧 Technical Details

### Technologies

- **marked.js**: Markdown to HTML conversion
- **Highlight.js**: Syntax highlighting with line numbers support
- **Hash routing**: Client-side navigation without server config
- **i18n**: Language detection and translations
- **Canvas API**: 404 stars animation

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- ES6+ JavaScript

## 📝 Tips

- Keep article slugs URL-friendly (lowercase, hyphens)
- Optimize images before uploading (TinyPNG, Squoosh)
- Use descriptive alt text for accessibility
- Test locally before pushing to GitHub
- Clear browser cache if changes don't appear
