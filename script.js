// Dark mode toggle with localStorage persistence
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const KEY = 'dappdavid-theme';

  function applyTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
  }

  // init from saved or system pref
  const saved = localStorage.getItem(KEY);
  if(saved) {
    applyTheme(saved);
    toggle.checked = (saved === 'dark');
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
    toggle.checked = prefersDark;
  }

  toggle.addEventListener('change', ()=>{
    const mode = toggle.checked ? 'dark' : 'light';
    applyTheme(mode);
    localStorage.setItem(KEY, mode);
  });
})();