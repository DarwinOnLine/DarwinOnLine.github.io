import { buildOGPages } from './src/og-builder.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

buildOGPages({
    baseUrl: 'https://darwinonline.github.io',
    siteName: 'Darwin On Line',
    languages: ['fr', 'en'],
    postsDir: 'posts',
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
