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
    pagination: {
      previous: 'Previous',
      next: 'Next'
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
    pagination: {
      previous: 'Précédent',
      next: 'Suivant'
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
