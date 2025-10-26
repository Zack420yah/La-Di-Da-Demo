// Loader animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const bar = loader.querySelector(".bar");
  bar.style.width = "100%";
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2200);
});

// Scroll reveal animations
const reveals = document.querySelectorAll(".fade-in, .fade-in-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Smooth scroll & glow animation for Book Now buttons
document.querySelectorAll('a[href="#booking"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector("#booking");

    // Smooth scroll to booking section
    target.scrollIntoView({ behavior: "smooth" });

    // Glow animation to draw attention
    target.classList.add("glow-highlight");
    setTimeout(() => target.classList.remove("glow-highlight"), 2000);
  });
});

// Optional: fade header slightly while scrolling
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.opacity = window.scrollY > 100 ? '0.85' : '1';
});
// Optional: back-to-top button functionality
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
