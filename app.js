// Blog app with marked.js for Markdown parsing and i18n support

class Blog {
  constructor() {
    this.postsIndex = [];
    this.contentContainer = document.getElementById('content');
    this.postsPerPage = 10;
    this.currentLang = this.detectLanguage();
    this.init();
  }

  async init() {
    await this.loadPostsIndex();
    this.setupRouting();
    this.handleRoute();
  }

  detectLanguage() {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('/en') || hash.startsWith('en')) return 'en';
    if (hash.startsWith('/fr') || hash.startsWith('fr')) return 'fr';
    return detectLanguage(); // From i18n.js
  }

  async loadPostsIndex() {
    try {
      const response = await fetch(`posts/${this.currentLang}/index.json?t=` + Date.now());
      if (!response.ok) throw new Error('Failed to fetch posts index');
      this.postsIndex = await response.json();
    } catch (error) {
      console.error('Failed to load posts index:', error);
      this.postsIndex = [];
    }
  }

  setupRouting() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('popstate', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.slice(1);
    let path = hash || '/';

    // Extract language from path
    const langMatch = path.match(/^\/(en|fr)(\/|$)/);
    if (langMatch) {
      const newLang = langMatch[1];
      if (newLang !== this.currentLang) {
        this.currentLang = newLang;
        this.loadPostsIndex().then(() => this.handleRoute());
        return;
      }
      path = path.replace(/^\/(en|fr)/, '') || '/';
    }

    if (path === '/' || path === '') {
      this.showHome();
    } else if (path === '/blog' || path.startsWith('/blog?')) {
      const urlParams = new URLSearchParams(path.split('?')[1]);
      const page = parseInt(urlParams.get('page')) || 1;
      this.showBlog(page);
    } else if (path.startsWith('/blog/')) {
      const slug = path.split('/blog/')[1];
      this.showPost(slug);
    } else {
      this.show404();
    }
  }

  t(key) {
    return getTranslation(this.currentLang, key);
  }

  getLanguageSwitcher(otherLangPath = null) {
    const currentPath = window.location.hash.slice(1).replace(/^\/(en|fr)/, '') || '/';
    const enPath = otherLangPath !== null && this.currentLang === 'fr' ? `/en/blog/${otherLangPath}` : `/en${currentPath}`;
    const frPath = otherLangPath !== null && this.currentLang === 'en' ? `/fr/blog/${otherLangPath}` : `/fr${currentPath}`;

    return `
      <div class="lang-switcher">
        <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}"
                onclick="window.location.hash = '${enPath}'">EN</button>
        <button class="lang-btn ${this.currentLang === 'fr' ? 'active' : ''}"
                onclick="window.location.hash = '${frPath}'">FR</button>
      </div>
    `;
  }


  async showHome() {
    try {
      const response = await fetch(`home-${this.currentLang}.md`);
      if (!response.ok) throw new Error('Home page not found');

      const markdown = await response.text();
      const html = marked.parse(markdown);

      this.contentContainer.innerHTML = `
        <div class="home-page">
          <nav class="main-nav">
            ${this.getLanguageSwitcher()}
            <a href="#/${this.currentLang}/blog">${this.t('nav.blog')}</a>
          </nav>
          <div class="home-content">
            ${html}
          </div>
        </div>
      `;
      this.highlightCode();
    } catch (error) {
      console.error('Failed to load home page:', error);
      this.contentContainer.innerHTML = `
        <div class="home-page">
          <nav class="main-nav">
            ${this.getLanguageSwitcher()}
            <a href="#/${this.currentLang}/blog">${this.t('nav.blog')}</a>
          </nav>
          <div class="home-content">
            <h1>Darwin On Line 🦉</h1>
            <p>Welcome to my website!</p>
          </div>
        </div>
      `;
    }
  }

  showBlog(page = 1) {
    const sortedPosts = this.postsIndex.sort((a, b) => new Date(b.date) - new Date(a.date));
    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / this.postsPerPage);
    const startIndex = (page - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    const postsToShow = sortedPosts.slice(startIndex, endIndex);

    const postsHTML = postsToShow
      .map(post => `
        <article class="post-preview">
          <h2><a href="#/${this.currentLang}/blog/${post.slug}">${post.title}</a></h2>
          <p class="post-meta">${this.formatDate(post.date)}</p>
          <p>${post.description}</p>
        </article>
      `)
      .join('');

    const paginationHTML = this.generatePagination(page, totalPages);

    this.contentContainer.innerHTML = `
      <div class="blog-page">
        <nav class="main-nav">
          ${this.getLanguageSwitcher()}
          <a href="#/${this.currentLang}">${this.t('nav.home')}</a>
        </nav>
        <h1>${this.t('blog.title')}</h1>
        <div class="posts-list">
          ${postsHTML || `<p>${this.t('blog.noPosts')}</p>`}
        </div>
        ${totalPages > 1 ? paginationHTML : ''}
      </div>
    `;
  }

  generatePagination(currentPage, totalPages) {
    if (totalPages <= 1) return '';

    let paginationHTML = '<nav class="pagination">';

    // Previous button
    if (currentPage > 1) {
      paginationHTML += `<a href="#/${this.currentLang}/blog?page=${currentPage - 1}" class="page-link">&laquo; ${this.t('pagination.previous')}</a>`;
    } else {
      paginationHTML += `<span class="page-link disabled">&laquo; ${this.t('pagination.previous')}</span>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        paginationHTML += `<span class="page-link active">${i}</span>`;
      } else if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        paginationHTML += `<a href="#/${this.currentLang}/blog?page=${i}" class="page-link">${i}</a>`;
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        paginationHTML += `<span class="page-link dots">...</span>`;
      }
    }

    // Next button
    if (currentPage < totalPages) {
      paginationHTML += `<a href="#/${this.currentLang}/blog?page=${currentPage + 1}" class="page-link">${this.t('pagination.next')} &raquo;</a>`;
    } else {
      paginationHTML += `<span class="page-link disabled">${this.t('pagination.next')} &raquo;</span>`;
    }

    paginationHTML += '</nav>';
    return paginationHTML;
  }

  async showPost(slug) {
    const post = this.postsIndex.find(p => p.slug === slug);

    if (!post) {
      this.show404();
      return;
    }

    try {
      const response = await fetch(`posts/${this.currentLang}/${slug}.md`);
      if (!response.ok) throw new Error('Post not found');

      const markdown = await response.text();
      const html = marked.parse(markdown);

      this.contentContainer.innerHTML = `
        <div class="post">
          <nav class="post-nav">
            ${post.i18nSlug ? this.getLanguageSwitcher(post.i18nSlug) : ''}
            <a href="#/${this.currentLang}">&larr; ${this.t('post.backToHome')}</a>
            <a href="#/${this.currentLang}/blog">${this.t('post.backToBlog')}</a>
          </nav>
          <article>
            <div class="post-meta">${this.formatDate(post.date)}</div>
            <div class="post-content">
              ${html}
            </div>
          </article>
        </div>
      `;
      this.highlightCode();
      this.executeEmbeddedScripts();
    } catch (error) {
      console.error('Failed to load post:', error);
      this.show404();
    }
  }

  async show404() {
    // Display 404 page with stars animation inline
    this.contentContainer.innerHTML = `
      <style>
        .error-404-page {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 9999;
          background: #000;
        }
        #space-404 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .content-404 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          z-index: 2;
        }
        .lost-text-404 {
          font-size: 3rem;
          font-weight: 300;
          margin: 0 0 1rem 0;
          color: #fff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        #warp-404 {
          display: inline-block;
          padding: 1rem 3rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        #warp-404:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(209, 255, 255, 0.3);
        }
        @media (max-width: 768px) {
          .lost-text-404 { font-size: 2rem; }
          #warp-404 { padding: 0.8rem 2rem; font-size: 1rem; }
        }
      </style>
      <div class="error-404-page">
        <canvas id="space-404"></canvas>
        <div class="content-404">
          <p class="lost-text-404">Lost ?</p>
          <span id="warp-404">Back home</span>
        </div>
      </div>
    `;

    // Initialize stars animation
    setTimeout(() => {
      const canvas = document.getElementById("space-404");
      if (!canvas) return;

      const c = canvas.getContext("2d");
      const numStars = 1900;
      const radius = '0.' + Math.floor(Math.random() * 9) + 1;
      let focalLength = canvas.width * 2;
      let warp = 0;
      let centerX, centerY;
      let stars = [];
      let animate = true;

      const initializeStars = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        focalLength = canvas.width * 2;

        stars = [];
        for(let i = 0; i < numStars; i++){
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
          });
        }
      };

      const moveStars = () => {
        for(let i = 0; i < numStars; i++){
          stars[i].z--;
          if(stars[i].z <= 0){
            stars[i].z = canvas.width;
          }
        }
      };

      const drawStars = () => {
        if(canvas.width !== window.innerWidth || canvas.height !== window.innerHeight){
          initializeStars();
        }

        if(warp === 0){
          c.fillStyle = "rgba(0,10,20,1)";
          c.fillRect(0, 0, canvas.width, canvas.height);
        }

        c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
        for(let i = 0; i < numStars; i++){
          const star = stars[i];
          const pixelX = (star.x - centerX) * (focalLength / star.z) + centerX;
          const pixelY = (star.y - centerY) * (focalLength / star.z) + centerY;
          const pixelRadius = 1 * (focalLength / star.z);

          c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
          c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
        }
      };

      const executeFrame = () => {
        if(animate){
          requestAnimationFrame(executeFrame);
        }
        moveStars();
        drawStars();
      };

      initializeStars();
      executeFrame();

      // Warp effect
      document.getElementById('warp-404').addEventListener("click", () => {
        warp = 1;
        const interval = setInterval(() => {
          for(let i = 0; i < numStars; i++){
            stars[i].z -= 50;
            if(stars[i].z <= 0){
              stars[i].z = canvas.width;
            }
          }
        }, 10);

        setTimeout(() => {
          clearInterval(interval);
          window.location.hash = `/${this.currentLang}`;
        }, 1000);
      });
    }, 100);
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.t('date.locale'), {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  highlightCode() {
    if (typeof hljs !== 'undefined') {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);

        const pre = block.parentElement;
        if (pre.hasAttribute('data-line-numbers')) {
          hljs.lineNumbersBlock(block);
          pre.classList.add('has-line-numbers');
        }
      });
    }
  }

  executeEmbeddedScripts() {
    const scripts = this.contentContainer.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }
}

// Initialize the blog when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Blog();
});
