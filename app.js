(() => {
  'use strict';
  const root = document.querySelector('.skinao');
  if (!root) return;
  root.querySelector('[data-year]').textContent = new Date().getFullYear();
  const toggle = root.querySelector('.nav-toggle');
  const navigation = root.querySelector('#nav-skinao');
  root.classList.add('nav-ready');
  toggle.hidden = false;
  function closeNavigation() {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeNavigation(); });
  root.addEventListener('keydown', event => { if (event.key === 'Escape') closeNavigation(); });
  const tablist = root.querySelector('.menu-tabs');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = [...root.querySelectorAll('[data-panel]')];
  const desktop = window.matchMedia('(min-width: 761px)');
  let selected = 'brasa';
  const mobileOpen = new Set(['brasa']);
  function select(id, focus = false) {
    selected = id;
    tabs.forEach(tab => {
      const active = tab.dataset.category === id;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (focus && active) tab.focus();
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.panel !== id; panel.open = panel.dataset.panel === id; });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.category));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      select(tabs[next].dataset.category, true);
    });
  });
  panels.forEach(panel => panel.addEventListener('toggle', () => {
    if (desktop.matches) return;
    if (panel.open) mobileOpen.add(panel.dataset.panel); else mobileOpen.delete(panel.dataset.panel);
  }));
  function setMode() {
    closeNavigation();
    root.classList.toggle('tabs-ready', desktop.matches);
    tablist.hidden = !desktop.matches;
    panels.forEach(panel => {
      if (desktop.matches) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', `tab-${panel.dataset.panel}`);
        panel.tabIndex = 0;
      } else {
        panel.hidden = false;
        panel.removeAttribute('role');
        panel.removeAttribute('aria-labelledby');
        panel.removeAttribute('tabindex');
        panel.open = mobileOpen.has(panel.dataset.panel);
      }
    });
    if (desktop.matches) select(selected);
  }
  desktop.addEventListener('change', setMode);
  setMode();
})();
