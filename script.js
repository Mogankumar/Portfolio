
document.addEventListener("DOMContentLoaded", () => {
    // Select both project cards and timeline items
    const elements = document.querySelectorAll(".project-card, .timeline-item");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the visible class when in view
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    elements.forEach((element) => observer.observe(element));
  });

  