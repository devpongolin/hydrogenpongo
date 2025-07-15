(function () {
  const CLASSES_TO_WATCH = ['home', 'on-the-road', 'at-home', 'gift-shop'];
  const CLASS_HEADER = 'custom-header';
  const CLASS_STICKY = 'custom-sticky-header';

  // Check if any of the target classes are in the DOM
  function updateBodyClass() {
    const hasWatchedClass = CLASSES_TO_WATCH.some((cls) =>
      document.querySelector(`.${cls}`)
    );
    document.body.classList.toggle(CLASS_HEADER, hasWatchedClass);
  }

  // Scroll-based sticky header toggle
  function handleScroll() {
    if (window.scrollY > 0) {
      document.body.classList.add(CLASS_STICKY);
    } else {
      document.body.classList.remove(CLASS_STICKY);
    }
  }

  // Initial DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateBodyClass();
      handleScroll();
    });
  } else {
    updateBodyClass();
    handleScroll();
  }

  // Watch DOM for changes
  const observer = new MutationObserver(updateBodyClass);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
})();
