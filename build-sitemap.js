import { buildSitemap } from './src/sitemap-builder.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

buildSitemap({
    baseUrl: 'https://darwinonline.github.io',
    languages: ['fr', 'en'],
    postsDir: 'posts',
    rootDir: __dirname,
    sitemapFileName: 'sitemap.xml',
});
