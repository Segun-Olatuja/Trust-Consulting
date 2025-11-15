// Mobile menu (basic)
document.getElementById("mobileToggle")?.addEventListener("click", () => {
    alert("Mobile menu can be added here if needed.");
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();
// Smooth Fade-In Animation for Sections
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});


// Active Navigation Highlight on Scroll
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
