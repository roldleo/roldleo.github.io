export default {
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply the animation class when the element is in the viewport
          el.classList.add(binding.value);
          observer.unobserve(entry.target); // Stop observing after the animation is applied
        }
      });
    }, options);

    observer.observe(el);
  },
};
