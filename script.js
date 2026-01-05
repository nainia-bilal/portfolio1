/* script.js - typing animation, mobile nav toggle, and simple UI helpers */
document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  const textElement = document.querySelector('.typing-text');
  if (textElement) {
    const texts = ['Web Developer', 'Management Student', 'Creative Designer'];
    let t = 0, i = 0, current = '';
    (function type() {
      if (t >= texts.length) t = 0;
      current = texts[t];
      textElement.textContent = current.slice(0, ++i);
      if (i === current.length) { t++; i = 0; setTimeout(type, 1800); } else { setTimeout(type, 90); }
    })();
  }

  // Mobile navbar toggle
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const opened = !menu.classList.contains('hidden');
      btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });

    // Close when link clicked
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    }));
  }

  // Stagger fade-in animations for elements with .fade-in-up
  const fades = Array.from(document.querySelectorAll('.fade-in-up'));
  fades.forEach((el, idx) => el.style.setProperty('--delay', `${idx * 0.06}s`));

  // Initialize VanillaTilt for elements with data-tilt (if loaded)
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 8, speed: 400, glare: true, 'max-glare': 0.25 });
  }
});

