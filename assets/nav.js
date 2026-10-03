// ==========================================================================
// GUJARAT CASTOR OLEOCHEMICALS — UNIVERSAL PORTAL NAVIGATION SCRIPT
// ==========================================================================

(function() {
  const DIRECTORIES = [
    { title: "Agrochemical Directory", file: "agrochemical-directory.html", count: "500" },
    { title: "Aviation & Automotive", file: "aviation-automotive-directory.html", count: "400" },
    { title: "Chemical Manufacturing", file: "chemical-manufacturing-directory.html", count: "350" },
    { title: "Cosmetics & Personal Care", file: "cosmetics-personal-care-directory.html", count: "500" },
    { title: "Flavors & Fragrances", file: "flavors-fragrances-directory.html", count: "500" },
    { title: "Lubricants & Automotive", file: "lubricants-automotive-directory.html", count: "500" },
    { title: "Paints, Inks & Coatings", file: "paints-coatings-directory.html", count: "500" },
    { title: "Plastics & Rubber", file: "plastics-rubber-directory.html", count: "500" },
    { title: "Polymers & Plastics (Top 50)", file: "polymers-plastics-top50.html", count: "310" }
  ];

  const CORE_APPS = [
    { title: "Executive Portal Home", file: "index.html", icon: "🏛️" },
    { title: "3D Plant Digital Twin", file: "factory-3d.html", icon: "🏭" },
    { title: "B2B Market Intelligence", file: "market-dashboard.html", icon: "📊" },
    { title: "Lubricant Expo Europe 2027", file: "lubricant-expo-2027.html", icon: "🎪" }
  ];

  function getBaseUrl() {
    return window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
  }

  function getCurrentFilename() {
    const p = window.location.pathname;
    const f = p.substring(p.lastIndexOf('/') + 1) || 'index.html';
    return f;
  }

  function renderNavbar() {
    const navEl = document.getElementById('universal-portal-bar');
    if (!navEl) return;

    const currentFile = getCurrentFilename();

    let dirLinksHtml = DIRECTORIES.map(d => {
      const isActive = currentFile === d.file ? 'active' : '';
      return `<a href="${d.file}" class="up-dropdown-item ${isActive}">
        <span>${d.title}</span>
        <span class="up-badge-count">${d.count}</span>
      </a>`;
    }).join('');

    let mobileLinksHtml = `
      <div style="font-weight:700; color:#f59e0b; margin-bottom:8px; font-size:0.85rem; text-transform:uppercase;">Core Applications</div>
      ${CORE_APPS.map(a => `<a href="${a.file}" class="up-nav-link ${currentFile === a.file ? 'active' : ''}" style="display:flex; padding:10px 14px; font-size:0.95rem;">${a.icon} ${a.title}</a>`).join('')}
      <div style="font-weight:700; color:#f59e0b; margin:16px 0 8px; font-size:0.85rem; text-transform:uppercase;">Global Sourcing Directories (4,336+ Entities)</div>
      ${DIRECTORIES.map(d => `<a href="${d.file}" class="up-dropdown-item ${currentFile === d.file ? 'active' : ''}" style="padding:10px 14px;">
        <span>${d.title}</span>
        <span class="up-badge-count">${d.count}</span>
      </a>`).join('')}
    `;

    navEl.innerHTML = `
      <a href="index.html" class="up-brand-group">
        <span class="up-brand-badge">BHADA</span>
        <div class="up-brand-titles">
          <span class="up-brand-title">GUJARAT CASTOR OLEOCHEMICALS</span>
          <span class="up-brand-subtitle">Global Intelligence & Sourcing Platform</span>
        </div>
      </a>

      <ul class="up-nav-links">
        <li class="up-nav-item">
          <a href="index.html" class="up-nav-link ${currentFile === 'index.html' || currentFile === '' ? 'active' : ''}">
            <span>🏛️ Portal Home</span>
          </a>
        </li>
        <li class="up-nav-item">
          <a href="factory-3d.html" class="up-nav-link ${currentFile === 'factory-3d.html' ? 'active' : ''}">
            <span>🏭 3D Plant Twin</span>
          </a>
        </li>
        <li class="up-nav-item">
          <a href="market-dashboard.html" class="up-nav-link ${currentFile === 'market-dashboard.html' ? 'active' : ''}">
            <span>📊 Market Intelligence</span>
          </a>
        </li>
        <li class="up-nav-item">
          <a href="lubricant-expo-2027.html" class="up-nav-link ${currentFile === 'lubricant-expo-2027.html' ? 'active' : ''}">
            <span>🎪 Expo 2027</span>
          </a>
        </li>
        <li class="up-nav-item">
          <button class="up-nav-link up-dropdown-btn" id="up-dir-btn">
            <span>🌐 Sourcing Directories (9) ▾</span>
          </button>
          <div class="up-dropdown-menu" id="up-dir-menu">
            <div class="up-dropdown-header">Verified Industrial Buyers</div>
            ${dirLinksHtml}
          </div>
        </li>
      </ul>

      <div class="up-actions">
        <button class="up-search-trigger" id="up-search-trigger-btn" title="Search all 4,336+ entities">
          <span>🔍 Search</span>
          <span class="up-kbd">Ctrl+K</span>
        </button>
        ${currentFile !== 'index.html' && currentFile !== '' ? `<a href="index.html" class="up-portal-home-btn">← Portal</a>` : ''}
        <button class="up-mobile-toggle" id="up-mobile-toggle-btn" aria-label="Toggle Navigation">☰</button>
      </div>

      <!-- Mobile Drawer -->
      <div class="up-mobile-drawer" id="up-mobile-drawer">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-weight:700; color:#fff; font-size:1.1rem;">Navigation</span>
          <button id="up-mobile-close-btn" style="background:none; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer;">✕</button>
        </div>
        ${mobileLinksHtml}
      </div>

      <!-- Search Modal -->
      <div class="up-search-modal-backdrop" id="up-search-modal">
        <div class="up-search-modal">
          <div class="up-search-header">
            <span style="font-size:1.2rem;">🔍</span>
            <input type="text" id="up-search-input" placeholder="Search 4,336+ companies, hubs, or chemicals (e.g. BASF, Houston, Sebacic, Nylon)..." autocomplete="off" />
            <button class="up-search-close" id="up-search-close-btn">✕</button>
          </div>
          <div style="padding: 8px 16px; background: rgba(0,0,0,0.2); font-size: 0.76rem; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between;">
            <span id="up-search-count">Ready to search across 4,336 entities</span>
            <span>ESC to close</span>
          </div>
          <div class="up-search-results" id="up-search-results">
            <div style="padding: 24px; text-align: center; color: #64748b; font-size: 0.88rem;">
              Type a company name, location, or chemical grade to search all 12 directories instantly.
            </div>
          </div>
        </div>
      </div>
    `;

    setupEvents();
  }

  let searchIndex = null;

  function loadSearchIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    return fetch('assets/global-search.json')
      .then(res => res.json())
      .then(data => {
        searchIndex = data;
        return data;
      })
      .catch(err => {
        console.warn('Could not load global search index:', err);
        return [];
      });
  }

  function performSearch(query) {
    const resultsContainer = document.getElementById('up-search-results');
    const countEl = document.getElementById('up-search-count');
    if (!resultsContainer) return;

    if (!query || query.trim().length < 2) {
      resultsContainer.innerHTML = `
        <div style="padding: 24px; text-align: center; color: #64748b; font-size: 0.88rem;">
          Type at least 2 characters to search across 4,336 companies.
        </div>`;
      if (countEl) countEl.textContent = 'Ready to search across 4,336 entities';
      return;
    }

    const q = query.toLowerCase().trim();
    loadSearchIndex().then(items => {
      const matches = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (
          item.n.toLowerCase().includes(q) ||
          item.h.toLowerCase().includes(q) ||
          item.d.toLowerCase().includes(q) ||
          item.c.toLowerCase().includes(q)
        ) {
          matches.push(item);
          if (matches.length >= 50) break; // Limit to 50 for max speed
        }
      }

      if (countEl) countEl.textContent = `Found ${matches.length} matches (showing top 50)`;

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 24px; text-align: center; color: #94a3b8; font-size: 0.9rem;">
            No entities matching "<strong>${escapeHtml(query)}</strong>" found.
          </div>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(m => `
        <a href="${m.u}" class="up-search-item">
          <div class="up-search-meta">
            <span class="up-search-name">${escapeHtml(m.n)}</span>
            <span class="up-search-sub">
              <span>📍 ${escapeHtml(m.h || 'Global')}</span>
              <span>•</span>
              <span>🧪 ${escapeHtml(m.c)}</span>
            </span>
          </div>
          <span class="up-search-badge">${escapeHtml(m.cat || m.d)}</span>
        </a>
      `).join('');
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function setupEvents() {
    const dirBtn = document.getElementById('up-dir-btn');
    const dirMenu = document.getElementById('up-dir-menu');
    if (dirBtn && dirMenu) {
      dirBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dirMenu.classList.toggle('show');
      });
      document.addEventListener('click', () => {
        dirMenu.classList.remove('show');
      });
    }

    const mobileBtn = document.getElementById('up-mobile-toggle-btn');
    const mobileClose = document.getElementById('up-mobile-close-btn');
    const mobileDrawer = document.getElementById('up-mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => mobileDrawer.classList.add('open'));
    }
    if (mobileClose && mobileDrawer) {
      mobileClose.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    }

    const searchTrigger = document.getElementById('up-search-trigger-btn');
    const searchModal = document.getElementById('up-search-modal');
    const searchClose = document.getElementById('up-search-close-btn');
    const searchInput = document.getElementById('up-search-input');

    function openSearch() {
      if (!searchModal) return;
      searchModal.classList.add('open');
      loadSearchIndex();
      setTimeout(() => searchInput && searchInput.focus(), 50);
    }

    function closeSearch() {
      if (!searchModal) return;
      searchModal.classList.remove('open');
    }

    if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => performSearch(e.target.value), 150);
      });
    }

    // Keyboard shortcut Ctrl+K or Cmd+K or /
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape') {
        closeSearch();
        if (dirMenu) dirMenu.classList.remove('show');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();
