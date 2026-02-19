import { buildRSSFeeds } from './src/rss-builder.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

buildRSSFeeds({
    baseUrl: 'https://darwinonline.github.io',
    siteName: 'Darwin On Line',
    siteDescription: 'Blog personnel de Darwin - Développement, Tech et Réflexions',
    languages: ['fr', 'en'],
    postsDir: 'posts',
    defaultImage: 'assets/images/default-og.png',
    rootDir: __dirname,
    feedFileName: 'feed.xml',
    maxItems: 20,
});
