const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://darwinonline.github.io';
const LANGS = ['fr', 'en'];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function spaPage({ ogType, title, description, image, url }) {
  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <base href="/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        <link rel='icon' href='https://github.com/DarwinOnLine.png' type='image/png' />
        <link rel="stylesheet" type="text/css" media="screen" href="styles.css?v=3" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
        <title>${escapeHtml(title)}</title>
        <!-- Open Graph -->
        <meta property="og:type" content="${ogType}" />
        <meta property="og:title" content="${escapeHtml(title)}" />
        <meta property="og:description" content="${escapeHtml(description)}" />
        <meta property="og:image" content="${image}" />
        <meta property="og:url" content="${url}" />
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${escapeHtml(title)}" />
        <meta name="twitter:description" content="${escapeHtml(description)}" />
        <meta name="twitter:image" content="${image}" />
    </head>
    <body>
        <div class="cursor-dot" id="cursorDot"></div>
        <div id="content"></div>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>
        <script src="i18n.js"></script>
        <script src="app.js?v=3"></script>
    </body>
</html>`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  Generated: ${filePath}`);
}

const rootDir = __dirname;
const defaultImage = `${BASE_URL}/assets/images/default-og.png`;

for (const lang of LANGS) {
  const indexPath = path.join(rootDir, 'posts', lang, 'index.json');
  const posts = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

  // Lang root: fr/index.html
  writeFile(path.join(rootDir, lang, 'index.html'), spaPage({
    ogType: 'website',
    title: 'Darwin On Line',
    description: 'Blog',
    image: defaultImage,
    url: `${BASE_URL}/${lang}`,
  }));

  // Blog listing: fr/blog/index.html
  writeFile(path.join(rootDir, lang, 'blog', 'index.html'), spaPage({
    ogType: 'website',
    title: 'Blog - Darwin On Line',
    description: 'Blog',
    image: defaultImage,
    url: `${BASE_URL}/${lang}/blog`,
  }));

  // Article pages with OG meta
  for (const post of posts) {
    writeFile(
      path.join(rootDir, lang, 'blog', post.slug, 'index.html'),
      spaPage({
        ogType: 'article',
        title: `${post.title} - Darwin On Line`,
        description: post.description,
        image: `${BASE_URL}/${post.image}`,
        url: `${BASE_URL}/${lang}/blog/${post.slug}`,
      })
    );
  }
}

console.log('\nOG pages built successfully.');
