// Lazy loading images
function lazyLoad() {
  const imgTargets = document.querySelectorAll('img[data-src]');
  console.log(imgTargets);

  function loadImg(entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-image');
    });

    observer.unobserve(entry.target);
  }

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
  });

  imgTargets.forEach(img => imgObserver.observe(img));
}
lazyLoad();
