// FURNIWOOD - CONTACT FORM HANDLER
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("furniForm");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! Your message has been received. We will contact you soon.");
      form.reset();
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});