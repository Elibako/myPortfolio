// Scroll.js
const scrollToSection = (sectionId) => {
  const targetSection = document.querySelector(sectionId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  }
};

  