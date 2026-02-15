// Blog app with marked.js for Markdown parsing and i18n support

class Blog {
  constructor() {
    this.postsIndex = [];
    this.contentContainer = document.getElementById('content');
    this.postsPerPage = 10;
    this.currentLang = this.detectLanguage();
    this._routeId = 0;
    this.initCursorDot();
    this.init();
  }

  async init() {
    await this.loadPostsIndex();
    this.setupRouting();
    this.handleRoute();
  }

  initCursorDot() {
    const dot = document.getElementById('cursorDot');
    if (!dot) return;
    document.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX - 6 + 'px';
      dot.style.top = e.clientY - 6 + 'px';
    });
    document.addEventListener('mousedown', () => {
      dot.style.transform = 'scale(2)';
    });
    document.addEventListener('mouseup', () => {
      dot.style.transform = 'scale(1)';
    });
  }

  detectLanguage() {
    const path = window.location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/fr')) return 'fr';
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
    window.addEventListener('popstate', () => {
      this.stopActiveAnimations();
      this.handleRoute();
    });

    // Intercept internal link clicks for SPA navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        this.navigateTo(href);
      }
    });
  }

  navigateTo(path) {
    this.stopActiveAnimations();
    history.pushState(null, '', path);
    this.handleRoute();
  }

  stopActiveAnimations() {
    if (this._animationId) {
      cancelAnimationFrame(this._animationId);
      this._animationId = null;
    }
    document.body.style.overflow = '';
  }

  showLoading() {
    this.contentContainer.innerHTML = `
      <div class="loading-page">
        <div class="loading-dots">
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
        </div>
      </div>
    `;
  }

  handleRoute() {
    const routeId = ++this._routeId;
    let path = window.location.pathname || '/';

    // Extract language from path
    const langMatch = path.match(/^\/(en|fr)(\/|$)/);
    if (langMatch) {
      const newLang = langMatch[1];
      if (newLang !== this.currentLang) {
        this.currentLang = newLang;
        this.showLoading();
        this.loadPostsIndex().then(() => {
          if (this._routeId === routeId) this.handleRoute();
        });
        return;
      }
      path = path.replace(/^\/(en|fr)/, '') || '/';
    }

    // Remove trailing slash
    path = path.replace(/\/$/, '') || '/';

    if (path === '/' || path === '') {
      this.showHome(routeId);
    } else if (path === '/blog') {
      const urlParams = new URLSearchParams(window.location.search);
      const page = parseInt(urlParams.get('page')) || 1;
      this.showBlog(page);
    } else if (path.startsWith('/blog/')) {
      const slug = path.split('/blog/')[1].replace(/\/$/, '');
      this.showPost(slug, routeId);
    } else {
      this.show404();
    }
  }

  t(key) {
    return getTranslation(this.currentLang, key);
  }

  getLanguageSwitcher(otherLangPath = null) {
    const currentPath = window.location.pathname.replace(/^\/(en|fr)/, '') || '/';
    const enPath = otherLangPath !== null && this.currentLang === 'fr' ? `/en/blog/${otherLangPath}` : `/en${currentPath}`;
    const frPath = otherLangPath !== null && this.currentLang === 'en' ? `/fr/blog/${otherLangPath}` : `/fr${currentPath}`;

    return `
      <div class="lang-switcher">
        <button class="lang-btn ${this.currentLang === 'fr' ? 'active' : ''}"
                onclick="window._blog.navigateTo('${frPath}')">FR</button>
        <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}"
                onclick="window._blog.navigateTo('${enPath}')">EN</button>
      </div>
    `;
  }


  async showHome(routeId) {
    this.showLoading();
    try {
      const response = await fetch(`home-${this.currentLang}.md?t=` + Date.now());
      if (!response.ok) throw new Error('Home page not found');
      if (this._routeId !== routeId) return;

      const markdown = await response.text();
      const html = marked.parse(markdown);

      this.contentContainer.innerHTML = `
        <div class="home-page">
          <nav class="main-nav">
            ${this.getLanguageSwitcher()}
            <a href="/${this.currentLang}/blog">${this.t('nav.blog')}</a>
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
      this.highlightCode();
    } catch (error) {
      console.error('Failed to load home page:', error);
      this.contentContainer.innerHTML = `
        <div class="home-page">
          <nav class="main-nav">
            ${this.getLanguageSwitcher()}
            <a href="/${this.currentLang}/blog">${this.t('nav.blog')}</a>
          </nav>
          <div class="home-header">
            <h1>Darwin<br>On Line<span class="dot">.</span><span class="cursor"></span></h1>
            <div class="avatar-wrapper">
              <img src="https://github.com/DarwinOnLine.png" alt="Darwin On Line" />
            </div>
          </div>
          <div class="home-content">
            <p>Welcome to my website!</p>
          </div>
        </div>
      `;
      this.updateMetaTags();
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
      .map((post, index) => {
        const num = String(startIndex + index + 1).padStart(2, '0');
        const tagsHTML = (post.tags || [])
          .map(tag => `<span class="post-tag">${tag}</span>`)
          .join('');
        return `
          <article class="post-preview" onclick="event.preventDefault(); window._blog.navigateTo('/${this.currentLang}/blog/${post.slug}')" style="cursor:pointer;">
            <div class="post-number">${num}</div>
            <h2>${post.title}</h2>
            <p class="post-meta">${this.formatDate(post.date)}</p>
            <p class="post-description">${post.description}</p>
            ${tagsHTML ? `<div class="post-tags">${tagsHTML}</div>` : ''}
          </article>
        `;
      })
      .join('');

    const paginationHTML = this.generatePagination(page, totalPages);

    this.contentContainer.innerHTML = `
      <div class="blog-page">
        <nav class="main-nav">
          ${this.getLanguageSwitcher()}
          <a href="/${this.currentLang}">${this.t('nav.home')}</a>
        </nav>
        <h1>${this.t('blog.title')}<span class="dot">.</span></h1>
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
      paginationHTML += `<a href="/${this.currentLang}/blog?page=${currentPage - 1}" class="page-link">&laquo; ${this.t('pagination.previous')}</a>`;
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
        paginationHTML += `<a href="/${this.currentLang}/blog?page=${i}" class="page-link">${i}</a>`;
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        paginationHTML += `<span class="page-link dots">...</span>`;
      }
    }

    // Next button
    if (currentPage < totalPages) {
      paginationHTML += `<a href="/${this.currentLang}/blog?page=${currentPage + 1}" class="page-link">${this.t('pagination.next')} &raquo;</a>`;
    } else {
      paginationHTML += `<span class="page-link disabled">${this.t('pagination.next')} &raquo;</span>`;
    }

    paginationHTML += '</nav>';
    return paginationHTML;
  }

  async showPost(slug, routeId) {
    const post = this.postsIndex.find(p => p.slug === slug);

    if (!post) {
      this.show404();
      return;
    }

    this.showLoading();
    try {
      const response = await fetch(`posts/${this.currentLang}/${slug}.md?t=` + Date.now());
      if (!response.ok) throw new Error('Post not found');
      if (this._routeId !== routeId) return;

      const markdown = await response.text();
      const html = marked.parse(markdown);

      this.contentContainer.innerHTML = `
        <div class="post-page">
          <nav class="main-nav">
            ${post.i18nSlug ? this.getLanguageSwitcher(post.i18nSlug) : ''}
            <a href="/${this.currentLang}">${this.t('nav.home')}</a>
            <a href="/${this.currentLang}/blog">${this.t('nav.blog')}</a>
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
      this.updateMetaTags(post);
    } catch (error) {
      console.error('Failed to load post:', error);
      this.show404();
    }
  }

  updateMetaTags(post) {
    const baseUrl = 'https://darwinonline.github.io';
    const defaultImage = `${baseUrl}/assets/images/default-og.png`;
    const title = post ? post.title : 'Darwin On Line';
    const description = post ? post.description : 'Blog';
    const image = post && post.image ? `${baseUrl}/${post.image}` : defaultImage;

    document.title = post ? `${post.title} - Darwin On Line` : 'Darwin On Line';

    const metaMap = {
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': window.location.href,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    for (const [property, content] of Object.entries(metaMap)) {
      const meta = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (meta) meta.setAttribute('content', content);
    }
  }

  async show404() {
    this.contentContainer.innerHTML = `
      <div class="error-404-page">
        <canvas id="space-404"></canvas>
        <div class="content-404">
          <p class="lost-text-404">Lost<span class="dot">?</span></p>
          <p class="lost-code-404">error 404 — page not found</p>
          <span id="warp-404">Back home</span>
        </div>
      </div>
    `;

    // Hide body background and prevent scroll
    document.body.style.overflow = 'hidden';

    // Initialize stars animation
    setTimeout(() => {
      const canvas = document.getElementById("space-404");
      if (!canvas) return;

      const c = canvas.getContext("2d");
      const numStars = 1900;
      const radius = '0.' + Math.floor(Math.random() * 9) + 1;
      let focalLength = canvas.width * 2;
      let centerX, centerY;
      let stars = [];
      let animate = true;
      let warpSpeed = 0;

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

        c.fillStyle = "rgba(0,10,20,1)";
        c.fillRect(0, 0, canvas.width, canvas.height);

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
          this._animationId = requestAnimationFrame(executeFrame);
        }
        moveStars();
        drawStars();
      };

      initializeStars();
      executeFrame();

      // Lightspeed warp effect
      let warping = false;

      document.getElementById('warp-404').addEventListener("click", () => {
        if (warping) return;
        warping = true;

        // Fade out text
        const content404 = document.querySelector('.content-404');
        content404.style.transition = 'opacity 0.4s';
        content404.style.opacity = '0';

        // Accelerate
        const accel = setInterval(() => {
          warpSpeed = Math.min(warpSpeed + 2, 120);
        }, 30);

        // Override draw to render streaks
        const warpDraw = () => {
          if (!warping) return;
          this._animationId = requestAnimationFrame(warpDraw);

          // Move stars at warp speed
          for (let j = 0; j < numStars; j++) {
            stars[j].z -= warpSpeed;
            if (stars[j].z <= 0) stars[j].z = canvas.width;
          }

          c.fillStyle = "rgba(0, 10, 20, 0.15)";
          c.fillRect(0, 0, canvas.width, canvas.height);

          for (let j = 0; j < numStars; j++) {
            const s = stars[j];
            const x = (s.x - centerX) * (focalLength / s.z) + centerX;
            const y = (s.y - centerY) * (focalLength / s.z) + centerY;
            const prevZ = s.z + warpSpeed * 0.6;
            const px = (s.x - centerX) * (focalLength / prevZ) + centerX;
            const py = (s.y - centerY) * (focalLength / prevZ) + centerY;
            const brightness = Math.min(1, warpSpeed / 40);
            const alpha = parseFloat(s.o) * (0.5 + brightness * 0.5);

            c.strokeStyle = "rgba(209, 255, 255, " + alpha + ")";
            c.lineWidth = Math.max(1, 2 * (focalLength / s.z / 100));
            c.beginPath();
            c.moveTo(px, py);
            c.lineTo(x, y);
            c.stroke();
          }
        };

        animate = false; // Stop normal animation
        warpDraw(); // Start warp animation

        // Flash white then navigate
        setTimeout(() => {
          clearInterval(accel);
          const flash = document.createElement('div');
          flash.style.cssText = 'position:fixed;inset:0;background:#fff;z-index:10000;opacity:0;transition:opacity 0.15s';
          document.body.appendChild(flash);
          requestAnimationFrame(() => { flash.style.opacity = '1'; });
          setTimeout(() => {
            warping = false;
            flash.remove();
            window._blog.navigateTo(`/${this.currentLang}`);
          }, 200);
        }, 1200);
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
  window._blog = new Blog();
});
