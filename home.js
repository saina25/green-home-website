// script.js
document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');
    
    services.forEach(service => {
      service.addEventListener('click', function() {
        service.classList.toggle('expanded');
      });
    });
  });
  