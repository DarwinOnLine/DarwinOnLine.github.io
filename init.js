(async function () {
    const { Quarkdown } = await import('./src/quarkdown.js');

    const app = new Quarkdown({
        siteName: 'Darwin On Line',
        baseUrl: 'https://darwinonline.github.io',
        languages: ['fr', 'en'],
        defaultLanguage: 'fr',
        defaultImage: 'assets/images/default-og.png',
        cursorDot: true,
        starfield404: true,
        feedFileName: 'feed.xml',
        toc: true,
        search: true,
        themeToggle: true,
        pages: {
            cv: {
                meta: {
                    fr: {
                        title: 'CV',
                        description: 'Matthieu Poignant, développeur full stack senior : SaaS, PHP/Symfony, Angular, React et agents IA.',
                        image: 'assets/images/cv/photo.jpg',
                        navLabel: 'CV',
                    },
                    en: {
                        title: 'Resume',
                        description: 'Matthieu Poignant, senior full stack developer: SaaS, PHP/Symfony, Angular, React and AI agents.',
                        image: 'assets/images/cv/photo.jpg',
                        navLabel: 'Resume',
                    },
                },
            },
            'cv-onepage': {
                nav: false,
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
        translations: {
            en: {
                nav: { home: 'Home', blog: 'Blog' },
                blog: {
                    title: 'Blog',
                    noPosts: 'No posts yet.',
                    readMore: 'Read more',
                    readingTime: '{min} min read',
                    toc: 'Table of contents',
                    tagTitle: 'Tag: {tag}',
                    allTags: 'Tags',
                    prevPost: 'Previous',
                    nextPost: 'Next',
                },
                pagination: { previous: 'Previous', next: 'Next' },
                date: { locale: 'en-US' },
                search: { placeholder: 'Search articles...', noResults: 'No results found.' },
            },
            fr: {
                nav: { home: 'Accueil', blog: 'Blog' },
                blog: {
                    title: 'Blog',
                    noPosts: 'Aucun article pour le moment.',
                    readMore: 'Lire la suite',
                    readingTime: '{min} min de lecture',
                    toc: 'Sommaire',
                    tagTitle: 'Tag\u00a0: {tag}',
                    allTags: 'Tags',
                    prevPost: 'Précédent',
                    nextPost: 'Suivant',
                },
                pagination: { previous: 'Précédent', next: 'Suivant' },
                date: { locale: 'fr-FR' },
                search: { placeholder: 'Rechercher un article...', noResults: 'Aucun résultat.' },
            }
        },
        analytics: {
            provider: 'umami',
            websiteId: 'c9b3d661-b931-412b-a358-cf555b2239ce',
        },
        renderHome(html, ctx) {
            return `
                <div class="home-page">
                    <nav class="main-nav">
                        <div class="lang-switcher">${ctx.nav()}</div>
                        <a href="/${ctx.lang}/blog">${ctx.t('nav.blog')}</a>
                        ${ctx.pagesNav()}
                    </nav>
                    <div class="home-header">
                        <h1>Darwin<br>On Line<span class="dot">.</span><span class="cursor"></span></h1>
                        <div class="avatar-wrapper">
                            <img src="https://github.com/DarwinOnLine.png" alt="Darwin On Line" />
                        </div>
                    </div>
                    <div class="home-content">
                        ${html}
                    </div>
                </div>
            `;
        }
    });

    app.start();
})();
