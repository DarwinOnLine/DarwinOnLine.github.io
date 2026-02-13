// Internationalization configuration

const translations = {
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog'
    },
    blog: {
      title: 'Blog',
      noPosts: 'No posts yet.',
      readMore: 'Read more'
    },
    post: {
      backToHome: 'Home',
      backToBlog: 'Blog'
    },
    pagination: {
      previous: 'Previous',
      next: 'Next'
    },
    error: {
      title: '404',
      message: 'Page not found',
      goHome: 'Go back home'
    },
    date: {
      locale: 'en-US'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      blog: 'Blog'
    },
    blog: {
      title: 'Blog',
      noPosts: 'Aucun article pour le moment.',
      readMore: 'Lire la suite'
    },
    post: {
      backToHome: 'Accueil',
      backToBlog: 'Blog'
    },
    pagination: {
      previous: 'Précédent',
      next: 'Suivant'
    },
    error: {
      title: '404',
      message: 'Page introuvable',
      goHome: 'Retour à l\'accueil'
    },
    date: {
      locale: 'fr-FR'
    }
  }
};

function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  return ['en', 'fr'].includes(langCode) ? langCode : 'en';
}

function getTranslation(lang, key) {
  const keys = key.split('.');
  let result = translations[lang];
  for (const k of keys) {
    result = result?.[k];
  }
  return result || key;
}
