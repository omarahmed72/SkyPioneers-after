document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // Helper function for consistent fade-in animation
  const fadeIn = (target, vars = {}) => {
    gsap.from(target, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%", // Trigger when top of element hits 85% of viewport
        toggleActions: "play none none reverse", // Optional: Re-play on scroll up? Or just "play none none none"
      },
      ...vars,
    });
  };

  // --- 1. About Section ---
  // Image (Slide in from left + Fade)
  gsap.from(".gs-about-img", {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
  });

  // Text (Fade in from right)
  gsap.from(".gs-about-text", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    stagger: 0.2, // Stagger existing children or just the element itself
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
  });

  // --- 2. Leadership Section ---
  // Text Column
  fadeIn(".gs-leader-text");

  // Image & Profile (Fade Up with Stagger)
  // We targets specific parts if they exist, or just the container
  gsap.from(".gs-leader-img-wrap, .gs-leader-info", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".leadership-section",
      start: "top 75%",
    },
  });

  // --- 3. Why Choose Section ---
  fadeIn(".gs-why-title");
  
  // Features Grid Items - Staggered Fade Up
  gsap.from(".gs-why-item", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)", // Slight little bounce
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 80%",
    },
  });

  // --- 4. Brief & Timeline Section ---
  fadeIn(".gs-brief-title");
  fadeIn(".gs-brief-text");

  // Timeline Items
  gsap.from(".gs-timeline-item", {
    opacity: 0,
    x: -30,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 75%",
    },
  });

  // --- 5. Contact Section ---
  // Left side (Form)
  gsap.from(".gs-contact-left", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#contactSection",
      start: "top 75%",
    },
  });

  // Right side (Image)
  gsap.from(".gs-contact-right", {
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#contactSection",
      start: "top 75%",
    },
  });
});
