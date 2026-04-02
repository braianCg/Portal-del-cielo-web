// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  if (isOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 70px; left: 0; right: 0;
      background: rgba(10,10,15,0.97);
      backdrop-filter: blur(16px);
      padding: 28px 28px 36px;
      gap: 22px;
      border-bottom: 1px solid rgba(124,58,237,0.18);
      z-index: 99;
      animation: fadeDown 0.25s ease;
    `;
    navCta.style.display = 'none';
  } else {
    navLinks.removeAttribute('style');
    navCta.removeAttribute('style');
  }
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.removeAttribute('style');
    navLinks.classList.remove('open');
    navCta.removeAttribute('style');
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
  '.mision-text, .mision-img, .invasion-header, .card, .min-card, .encuentro-item, .primera-vez, .oracion-section .container > *'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// ===== FORM SUBMIT =====
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('form-success');
  
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  
  setTimeout(() => {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-10px)';
    form.style.transition = 'all 0.4s ease';
    
    setTimeout(() => {
      form.style.display = 'none';
      success.classList.remove('hidden');
      success.style.animation = 'fadeUp 0.5s ease both';
    }, 400);
  }, 1000);
}

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===== INJECT FADE-DOWN KEYFRAME =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
