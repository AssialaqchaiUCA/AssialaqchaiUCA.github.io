$(document).ready(function () {

  const STORAGE_KEY  = 'cv-theme-mode';   
  const LIGHT_CLASS  = 'light-mode';      
  const $body        = $('body');
  const $btn         = $('#theme-toggle-btn');
  const ICONS = {
    dark:  '☀',    
    light: '☽'     
  };

  const TOOLTIPS = {
    dark:  'LIGHT MODE',   
    light: 'DARK MODE'     
  };

  function applyMode(mode) {
    if (mode === 'light') {
      $body.addClass(LIGHT_CLASS);
      $btn.html(ICONS.light);
      $btn.attr('data-tooltip', TOOLTIPS.light);
    } else {
      $body.removeClass(LIGHT_CLASS);
      $btn.html(ICONS.dark);
      $btn.attr('data-tooltip', TOOLTIPS.dark);
    }

    localStorage.setItem(STORAGE_KEY, mode);

    $btn.addClass('mode-changed');
    setTimeout(() => $btn.removeClass('mode-changed'), 400);
  }

  function getInitialMode() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return 'dark';
  }



  function init() {
    const initialMode = getInitialMode();

    $body.addClass('no-transition');
    applyMode(initialMode);

    setTimeout(function () {
      $body.removeClass('no-transition');
    }, 50);
  }

  init();

  $btn.on('click', function () {
    const isLight = $body.hasClass(LIGHT_CLASS);
    const newMode = isLight ? 'dark' : 'light';

    applyMode(newMode);

    $btn.stop(true).animate({ opacity: 0.5 }, 100).animate({ opacity: 1 }, 200);
  });


  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      const hasSavedPreference = localStorage.getItem(STORAGE_KEY) !== null;
      if (!hasSavedPreference) {
        applyMode(e.matches ? 'light' : 'dark');
      }
    });
  }

});
const noTransitionStyle = document.createElement('style');
noTransitionStyle.textContent = `
  body.no-transition,
  body.no-transition * {
    transition: none !important;
    animation-duration: 0.001s !important;
  }
`;
document.head.appendChild(noTransitionStyle);
