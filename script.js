(function () {
  let container = document.querySelector(".animation");
  const observer = new IntersectionObserver(callbkfunction, { threshold: 0.4 });

  function callbkfunction(entries) {
    if (entries[0].isIntersecting) {
      const items = container.querySelectorAll(".animation-item");
      items.forEach((item) => {
        item.classList.add("active");
      });
    }
  }
  observer.observe(container);
})();
