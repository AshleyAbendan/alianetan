const scrollers = document.querySelectorAll(".scroller");

// Enable animation only if user hasn't requested reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");

    const inner = scroller.querySelector(".scroller__inner");
    const items = Array.from(inner.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      inner.appendChild(clone);
    });
  });
}
