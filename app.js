(function () {
  'use strict';

  const state = {
    selectedId: 'arcline',
    zoom: localStorage.getItem('alpad-zoom') || '1',
    theme: localStorage.getItem('alpad-theme') || 'light'
  };

  // ─── UTILS ──────────────────────────────────────────────────────────────────
  const RANK = { Yes: 3, Partial: 2, Unknown: 1, No: 0 };
  const IND = {
    Yes:     { sym: '●', cls: 'ind-yes' },
    Partial: { sym: '◐', cls: 'ind-partial' },
    No:      { sym: '○', cls: 'ind-no' },
    Unknown: { sym: '—', cls: 'ind-unknown' }
  };

  function ind(val) {
    const m = IND[val] || IND.Unknown;
    return `<span class="indicator ${m.cls}">${m.sym}</span>`;
  }

  function indLabel(val) {
    const m = IND[val] || IND.Unknown;
    return `<span class="indicator ${m.cls}">${m.sym}</span><span class="ind-label">${val}</span>`;
  }

  function delta(arcVal, compVal) {
    const a = RANK[arcVal] ?? 1, c = RANK[compVal] ?? 1;
    if (c > a) return `<span class="delta delta-up" title="Stronger than Arcline">↑</span>`;
    if (c < a) return `<span class="delta delta-down" title="Weaker than Arcline">↓</span>`;
    return '';
  }

  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function categoryForCompany(id) {
    return CATEGORIES.find(cat => cat.companies.includes(id));
  }

  function catDot(color, size = 8) {
    return `<span class="cat-dot" style="background:${color};width:${size}px;height:${size}px;"></span>`;
  }

  // ─── SIDEBAR HELPERS ─────────────────────────────────────────────────────────
  const SIDEBAR_ORDER = [
    'general-legal', 'legalos', 'wayco',
    'cooley', 'gunderson', 'goodwin',
    'harvey', 'legora', 'spellbook',
    'clerky', 'stripe-atlas', 'ironclad', 'lexion',
    'legalon', 'doctrine', 'thomson-reuters', 'lexisnexis'
  ];

  function layerTag(id) {
    const c = COMPANIES[id];
    const cat = categoryForCompany(id);
    if (!c || !cat) return { label: '', cls: '' };
    if (cat.id === 'legal-infrastructure') return { label: 'Infrastructure', cls: 'sb-tag-infra' };
    if (c.outputResponsibility === 'Company responsible') return { label: 'Owns Output', cls: 'sb-tag-owns' };
    return { label: 'Assists Output', cls: 'sb-tag-assists' };
  }

  function shortRegion(region) {
    if (!region || region === 'Unknown') return '';
    if (region === 'Global') return 'Global';
    if (region.includes('Norway') || region.includes('Nordic')) return 'US / Norway';
    if (region.includes('SE')) return 'Sweden';
    if (region.includes('FR')) return 'France';
    if (region.includes('JP')) return 'Japan / US';
    if (region === 'Canada' || (region.includes('CA') && !region.includes('US'))) return 'Canada';
    if (region.includes('CA') && region.includes('US')) return 'US / CA';
    return region.split('·')[0].trim();
  }

  function renderSidebarItem(id, isArcline) {
    const c = COMPANIES[id];
    if (!c) return '';
    const isActive = state.selectedId === id;
    const layer = layerTag(id);
    return `
      <div class="sidebar-item${isActive ? ' active' : ''}" data-id="${id}">
        <div class="sb-name">${esc(c.name)}</div>
        <div class="sb-tags">
          ${isArcline ? '<span class="sb-tag sb-tag-baseline">Baseline</span>' : ''}
          ${layer.label ? `<span class="sb-tag ${layer.cls}">${layer.label}</span>` : ''}
          <span class="sb-tag">${esc(c.productType)}</span>
          ${c.yc ? '<span class="sb-tag sb-tag-yc">YC</span>' : ''}
        </div>
      </div>
    `;
  }

  // ─── SIDEBAR CONTROLS ───────────────────────────────────────────────────────
  function renderControls() {
    const zooms = [{ val: '0.9', label: 'A−' }, { val: '1', label: 'A' }, { val: '1.1', label: 'A+' }];
    return `
      <div class="sidebar-controls">
        <div class="control-row">
          <span class="control-label">Size</span>
          <div class="scale-btns">
            ${zooms.map(z => `<button class="scale-btn${state.zoom === z.val ? ' active' : ''}" data-zoom="${z.val}">${z.label}</button>`).join('')}
          </div>
        </div>
        <div class="control-row">
          <span class="control-label">Theme</span>
          <button class="theme-btn" id="themeBtn">${state.theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    `;
  }

  // ─── SIDEBAR ────────────────────────────────────────────────────────────────
  function renderSidebar() {
    return `
      ${renderSidebarItem('arcline', true)}
      <div class="sidebar-divider-label">Ordered by Competitive Proximity to Arcline</div>
      ${SIDEBAR_ORDER.map(id => renderSidebarItem(id, false)).join('')}
      ${renderControls()}
    `;
  }

  // ─── ARCLINE ANALYSIS PAGE ──────────────────────────────────────────────────
  function renderArclinePage() {
    const c = COMPANIES.arcline;
    const flowSteps = [
      { label: 'Input', content: c.systemModel.input },
      { label: 'AI Processing', content: c.systemModel.ai },
      { label: 'Human Validation', content: c.systemModel.human },
      { label: 'Output', content: c.systemModel.output }
    ];

    return `
      <div class="page-grid">

        <div class="company-header">
          <div class="company-header-top">
            <div class="company-header-name">${esc(c.name)}</div>
            ${c.website ? `<a href="${c.website}" target="_blank" rel="noopener" class="company-link">↗ website</a>` : ''}
          </div>
          <div class="sb-tags">
            <span class="sb-tag sb-tag-baseline">Baseline</span>
            ${(() => { const layer = layerTag('arcline'); return layer.label ? `<span class="sb-tag ${layer.cls}">${layer.label}</span>` : ''; })()}
            <span class="sb-tag">${esc(c.productType)}</span>
            ${c.yc ? '<span class="sb-tag sb-tag-yc">YC</span>' : ''}
          </div>
          ${c.region && c.region !== 'Unknown' ? `<div class="company-regions"><span class="regions-label">Operates in</span><span class="regions-value">${esc(c.region)}</span></div>` : ''}
          <div class="company-header-desc">${esc(c.description)}</div>
        </div>

        <div class="card">
          <div class="card-label">System Model</div>
          <div class="flow-pipeline">
            ${flowSteps.map((s, i) => `
              <div class="flow-step">
                <div class="flow-step-label">${s.label}</div>
                <div class="flow-step-content">${esc(s.content)}</div>
              </div>
              ${i < 3 ? '<div class="flow-arrow">→</div>' : ''}
            `).join('')}
          </div>
        </div>

        <div class="three-col">
          <div class="card">
            <div class="card-label">AI Role</div>
            <div class="tag-group">${c.aiRole.map(r => `<span class="tag">${r}</span>`).join('')}</div>
          </div>
          <div class="card">
            <div class="card-label">Workflow Ownership</div>
            <div class="ownership-value">${esc(c.workflowOwnership)}</div>
          </div>
          <div class="card">
            <div class="card-label">Output Responsibility</div>
            <div class="ownership-value">${esc(c.outputResponsibility)}</div>
          </div>
        </div>

        <div class="card">
          <div class="card-label">UX Model</div>
          <div class="ux-grid">
            ${[['Entry', c.uxModel.entryType], ['Interaction', c.uxModel.interaction], ['Speed', c.uxModel.speed], ['Control', c.uxModel.control]]
              .map(([l, v]) => `<div class="ux-cell"><div class="ux-cell-label">${l}</div><div class="ux-cell-value">${esc(v)}</div></div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-label">Features</div>
          <div class="features-columns">
            ${FEATURE_GROUPS.map(g => `
              <div class="feature-group">
                <div class="feature-group-title">${g.label}</div>
                ${g.features.map(f => `
                  <div class="feature-row">
                    <span class="feature-name">${f.label}</span>
                    <span class="feature-ind">${indLabel(c.features[f.id] || 'Unknown')}</span>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="two-col">
          <div class="card">
            <div class="card-label">Moat</div>
            <ul class="signal-list moat-list">
              ${c.moat.map(m => `<li>${esc(m)}</li>`).join('')}
            </ul>
          </div>
          <div class="card">
            <div class="card-label">Risk</div>
            <ul class="signal-list risk-list">
              ${c.risks.map(r => `<li>${esc(r)}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="verdict-card">
          <div class="card-label">Verdict</div>
          <div class="verdict-grid">
            <div class="verdict-cell">
              <div class="verdict-cell-label">Why Arcline Wins</div>
              <div class="verdict-cell-content">${esc(c.verdict.wins)}</div>
            </div>
            <div class="verdict-cell">
              <div class="verdict-cell-label">Where Arcline is Vulnerable</div>
              <div class="verdict-cell-content">${esc(c.verdict.vulnerable)}</div>
            </div>
            <div class="verdict-cell">
              <div class="verdict-cell-label">Competitors That Matter</div>
              <div class="verdict-cell-content">${esc(c.verdict.competitors)}</div>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  // ─── COMPANY VS ARCLINE PAGE ─────────────────────────────────────────────────
  function renderCompanyPage(id) {
    const comp = COMPANIES[id];
    const arc  = COMPANIES.arcline;
    const cat  = categoryForCompany(id);
    const isPlaceholder = comp.dataQuality === 'placeholder';

    const headerHtml = `
      <div class="company-header">
        <div class="company-header-top">
          <div class="company-header-name">${esc(comp.name)}</div>
          ${comp.website ? `<a href="${comp.website}" target="_blank" rel="noopener" class="company-link">↗ website</a>` : ''}
        </div>
        <div class="sb-tags">
          ${(() => { const layer = layerTag(id); return layer.label ? `<span class="sb-tag ${layer.cls}">${layer.label}</span>` : ''; })()}
          <span class="sb-tag">${esc(comp.productType)}</span>
          ${comp.yc ? '<span class="sb-tag sb-tag-yc">YC</span>' : ''}
        </div>
        ${comp.region && comp.region !== 'Unknown' ? `<div class="company-regions"><span class="regions-label">Operates in</span><span class="regions-value">${esc(comp.region)}</span></div>` : ''}
        <div class="company-header-desc">${esc(comp.description)}</div>
      </div>
    `;

    if (isPlaceholder) {
      return headerHtml + `
        <div class="data-notice">
          <div class="data-notice-dot"></div>
          <div class="data-notice-text">Research in progress — detailed analysis will be added as data becomes available.</div>
        </div>
      `;
    }

    const vsRows = [
      ['Category', 'category'], ['Type', 'productType'], ['Region', 'region'],
      ['Stage', 'stage'], ['YC', null]
    ];

    const systemRows = [
      ['Input', 'input'], ['AI Processing', 'ai'], ['Human Validation', 'human'], ['Output', 'output']
    ];

    const workflowRows = [
      ['Ownership', 'workflowOwnership'], ['Responsibility', 'outputResponsibility'], ['AI Role', null]
    ];

    function vsColHtml(company, isArcline) {
      return `
        <div class="vs-column">
          <div class="vs-col-header">
            <span class="vs-col-name">${esc(company.name)}</span>
            ${isArcline ? '<span class="vs-col-badge">BASELINE</span>' : ''}
          </div>
          <div class="vs-col-body">
            <div class="card-label">Identity</div>
            ${(() => {
              const layer = layerTag(company.id);
              return [['Layer', layer.label || '—'], ['Type', company.productType], ['YC', company.yc ? 'Yes' : 'No']]
                .map(([l, v]) => `<div class="vs-row"><span class="vs-row-label">${l}</span><span class="vs-row-value">${esc(v)}</span></div>`).join('');
            })()}
            <br>
            <div class="card-label">System Model</div>
            ${[['Input', company.systemModel.input], ['AI', company.systemModel.ai], ['Human', company.systemModel.human], ['Output', company.systemModel.output]]
              .map(([l, v]) => `<div class="vs-row"><span class="vs-row-label">${l}</span><span class="vs-row-value">${esc(v)}</span></div>`).join('')}
            <br>
            <div class="card-label">Workflow</div>
            ${[['Ownership', company.workflowOwnership], ['Responsibility', company.outputResponsibility], ['AI Role', Array.isArray(company.aiRole) ? company.aiRole.join(', ') : company.aiRole]]
              .map(([l, v]) => `<div class="vs-row"><span class="vs-row-label">${l}</span><span class="vs-row-value">${esc(v)}</span></div>`).join('')}
            <br>
            <div class="card-label">UX Model</div>
            ${[['Entry', company.uxModel.entryType], ['Interaction', company.uxModel.interaction], ['Speed', company.uxModel.speed], ['Control', company.uxModel.control]]
              .map(([l, v]) => `<div class="vs-row"><span class="vs-row-label">${l}</span><span class="vs-row-value">${esc(v)}</span></div>`).join('')}
          </div>
        </div>
      `;
    }

    const featTableHtml = `
      <div class="feat-table-wrap">
        <table class="feat-table">
          <thead>
            <tr>
              <th class="th-feat">Feature</th>
              <th>Arcline <span class="th-sub">BASELINE</span></th>
              <th>${esc(comp.name)}</th>
            </tr>
          </thead>
          <tbody>
            ${FEATURE_GROUPS.map(g => `
              <tr class="tr-group"><td colspan="3">${g.label}</td></tr>
              ${g.features.map(f => {
                const av = arc.features[f.id] || 'Unknown';
                const cv = comp.features[f.id] || 'Unknown';
                return `
                  <tr class="tr-feat">
                    <td class="td-feat-label">${f.label}</td>
                    <td class="td-arcline-val"><div class="cell-flex">${indLabel(av)}</div></td>
                    <td><div class="cell-flex">${indLabel(cv)} ${delta(av, cv)}</div></td>
                  </tr>
                `;
              }).join('')}
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    const diff = comp.diff || { better: [], worse: [], different: [] };
    const diffHtml = (diff.better.length || diff.worse.length || diff.different.length) ? `
      <div class="diff-grid">
        <div class="diff-col">
          <div class="diff-col-label">Better than Arcline</div>
          <ul class="diff-list">
            ${diff.better.length ? diff.better.map(d => `<li>${esc(d)}</li>`).join('') : '<li style="color:var(--g400)">—</li>'}
          </ul>
        </div>
        <div class="diff-col">
          <div class="diff-col-label">Worse than Arcline</div>
          <ul class="diff-list">
            ${diff.worse.length ? diff.worse.map(d => `<li>${esc(d)}</li>`).join('') : '<li style="color:var(--g400)">—</li>'}
          </ul>
        </div>
        <div class="diff-col">
          <div class="diff-col-label">Different Approach</div>
          <ul class="diff-list">
            ${diff.different.length ? diff.different.map(d => `<li>${esc(d)}</li>`).join('') : '<li style="color:var(--g400)">—</li>'}
          </ul>
        </div>
      </div>
    ` : '';

    const signalHtml = `
      <div class="signal-row">
        <div class="signal-card">
          <div class="signal-card-label">Strength Signal</div>
          <div class="signal-card-value">${esc(comp.strengthSignal || '—')}</div>
        </div>
        <div class="signal-card">
          <div class="signal-card-label">Risk Signal</div>
          <div class="signal-card-value">${esc(comp.riskSignal || '—')}</div>
        </div>
      </div>
    `;

    const noticeHtml = comp.dataQuality === 'partial' ? `
      <div class="data-notice">
        <div class="data-notice-dot"></div>
        <div class="data-notice-text">Partial data — some fields are estimated or unknown. Analysis will be refined as more data is gathered.</div>
      </div>
    ` : '';

    const flowSteps = [
      { label: 'Input',            content: comp.systemModel.input },
      { label: 'AI Processing',    content: comp.systemModel.ai },
      { label: 'Human Validation', content: comp.systemModel.human },
      { label: 'Output',           content: comp.systemModel.output }
    ];

    const systemModelHtml = `
      <div class="card">
        <div class="card-label">System Model — ${esc(comp.name)}</div>
        <div class="flow-pipeline">
          ${flowSteps.map((s, i) => `
            <div class="flow-step">
              <div class="flow-step-label">${s.label}</div>
              <div class="flow-step-content">${esc(s.content)}</div>
            </div>
            ${i < 3 ? '<div class="flow-arrow">→</div>' : ''}
          `).join('')}
        </div>
      </div>
    `;

    return headerHtml + noticeHtml + systemModelHtml + `
      <div class="vs-grid">${vsColHtml(arc, true)}${vsColHtml(comp, false)}</div>
      ${featTableHtml}
      ${diffHtml}
      ${signalHtml}
    `;
  }

  // ─── APPLY PREFS ─────────────────────────────────────────────────────────────
  function applyZoom() {
    const mc = document.getElementById('main-content');
    if (state.zoom === '1') mc.removeAttribute('data-zoom');
    else mc.dataset.zoom = state.zoom;
  }

  function applyTheme() {
    if (state.theme === 'dark') document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
  }

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  function render() {
    document.getElementById('sidebar').innerHTML = renderSidebar();
    const content = state.selectedId === 'arcline'
      ? renderArclinePage()
      : renderCompanyPage(state.selectedId);
    document.getElementById('main-content').innerHTML = content;
    document.getElementById('main-content').scrollTop = 0;
  }

  // ─── EVENTS ──────────────────────────────────────────────────────────────────
  function init() {
    applyTheme();
    applyZoom();
    render();

    document.getElementById('sidebar').addEventListener('click', e => {
      const zoomBtn = e.target.closest('[data-zoom]');
      if (zoomBtn) {
        state.zoom = zoomBtn.dataset.zoom;
        localStorage.setItem('alpad-zoom', state.zoom);
        applyZoom();
        render();
        return;
      }

      if (e.target.id === 'themeBtn') {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('alpad-theme', state.theme);
        applyTheme();
        render();
        return;
      }

      const item = e.target.closest('[data-id]');
      if (!item) return;
      const id = item.dataset.id;
      if (id && COMPANIES[id]) {
        state.selectedId = id;
        render();
        window.scrollTo(0, 0);
      }
    });
  }

  // ─── GATE ────────────────────────────────────────────────────────────────────
  function initGate() {
    const gate = document.getElementById('gate');
    const form = document.getElementById('gateForm');
    const input = document.getElementById('gateInput');
    const error = document.getElementById('gateError');
    const header = document.getElementById('appHeader');
    const layout = document.getElementById('appLayout');

    function unlock() {
      gate.style.display = 'none';
      header.style.display = '';
      layout.style.display = '';
      init();
    }

    document.getElementById('logoutBtn').addEventListener('click', () => {
      sessionStorage.removeItem('alpad-auth');
      header.style.display = 'none';
      layout.style.display = 'none';
      gate.style.display = '';
      input.value = '';
      error.textContent = '';
      input.focus();
    });

    if (sessionStorage.getItem('alpad-auth') === '1') { unlock(); return; }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (input.value === 'abauer') {
        sessionStorage.setItem('alpad-auth', '1');
        unlock();
      } else {
        error.textContent = 'Incorrect password.';
        input.value = '';
        input.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initGate);
})();
