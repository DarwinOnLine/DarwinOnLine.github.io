import { buildOGPages } from './src/og-builder.js';
import { readdirSync, readFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const LANGUAGES = ['fr', 'en'];
const POSTS_DIR = 'posts';

// Removes generated OG directories whose slug/tag is no longer in the posts index.
// buildOGPages only writes, so a post removed from index.json would otherwise keep
// an indexable page behind it.
function pruneOrphanOGPages() {
    for (const lang of LANGUAGES) {
        const posts = JSON.parse(readFileSync(join(__dirname, POSTS_DIR, lang, 'index.json'), 'utf-8'));
        const slugs = new Set(posts.map(post => post.slug));
        const tags = new Set(posts.flatMap(post => post.tags || []).map(tag => encodeURIComponent(tag)));

        pruneDirectory(join(__dirname, lang, 'blog'), name => name === 'tag' || slugs.has(name));
        pruneDirectory(join(__dirname, lang, 'blog', 'tag'), name => tags.has(name));
    }
}

function pruneDirectory(parentDir, isExpected) {
    let entries;
    try {
        entries = readdirSync(parentDir, { withFileTypes: true });
    } catch {
        return;
    }

    for (const entry of entries) {
        if (!entry.isDirectory() || isExpected(entry.name)) continue;

        const dir = join(parentDir, entry.name);
        const content = readdirSync(dir);
        if (content.length !== 1 || content[0] !== 'index.html') {
            console.warn(`  Skipped (unexpected content): ${dir}`);
            continue;
        }

        rmSync(dir, { recursive: true });
        console.log(`  Pruned: ${dir}`);
    }
}

buildOGPages({
    baseUrl: 'https://darwinonline.github.io',
    siteName: 'Darwin On Line',
    languages: LANGUAGES,
    postsDir: POSTS_DIR,
    defaultImage: 'assets/images/default-og.png',
    rootDir: __dirname,
    stylesheetPath: 'styles.css',
    scripts: [
        'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js',
        'init.js',
    ],
    pages: {
        cv: {
            meta: {
                fr: {
                    title: 'CV',
                    description: 'Matthieu Poignant, développeur full stack senior : SaaS, PHP/Symfony, Angular, React et agents IA.',
                    image: 'assets/images/cv/photo.jpg',
                },
                en: {
                    title: 'Resume',
                    description: 'Matthieu Poignant, senior full stack developer: SaaS, PHP/Symfony, Angular, React and AI agents.',
                    image: 'assets/images/cv/photo.jpg',
                },
            },
        },
        'cv-onepage': {
            meta: {
                fr: {
                    title: 'CV (1 page)',
                    description: 'Version condensée du CV de Matthieu Poignant, développeur full stack senior.',
                    image: 'assets/images/cv/photo.jpg',
                },
                en: {
                    title: 'Resume (one page)',
                    description: 'Condensed resume of Matthieu Poignant, senior full stack developer.',
                    image: 'assets/images/cv/photo.jpg',
                },
            },
        },
    },
});

pruneOrphanOGPages();
