document.addEventListener('DOMContentLoaded', () => {
  // Element selections
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  const mainContent = document.getElementById('main-content');
  const skipLink = document.querySelector('.skip-to-content');

  // Skip to content functionality
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.focus();
      mainContent.scrollIntoView({behavior: 'smooth'});
    });
  }

  // Mobile menu functionality
  const openMenu = () => {
    navLinks.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', handleEscKey);
  };

  const closeMenu = () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', handleEscKey);
  };

  // Close menu with Escape key
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };

  // Toggle menu when clicking hamburger
  menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu button functionality
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('open') &&
        !event.target.closest('#navLinks') &&
        !event.target.closest('#menuToggle')) {
      closeMenu();
    }
  });

  // Handle navigation with focus trap for accessibility
  navLinks.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = navLinks.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If shift+tab on first element, move to last
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // If tab on last element, move to first
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
});
