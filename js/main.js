const section = document.querySelector('.section1');
const parallaxImage = section.querySelector('.parallax-image');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navigation');

// NAV BAR SCROLL
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the scroll position value as needed
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// NAV BAR LINKS COLOR
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the scroll position value as needed
    navbarLinks.classList.add('scrolled');
  } else {
    navbarLinks.classList.remove('scrolled');
  }
});

// PARALLAX EFFECT
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const speed = 0.4; // adjust the speed of the parallax effect
  parallaxImage.style.transform = `translateY(${scrollPosition * speed}px)`;
});
// PARALLAX EFFECT

// WORK-DATA-NUMBER-COUNTER
const counters = document.querySelectorAll('.counter-numbers');

function animateCounter(counter) {
  const endValue = parseInt(counter.getAttribute('data-counter-end'));
  const duration = 2000; // animation duration in milliseconds
  let currentValue = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    currentValue = Math.floor(endValue * percentage);
    counter.textContent = currentValue > 0 ? currentValue + "+"  : currentValue;
    if (percentage < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      animateCounter(counter);
      observer.unobserve(entry.target);
    }
  });
});

counters.forEach((counter) => observer.observe(counter));
// WORK-DATA-NUMBER-COUNTER

