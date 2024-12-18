

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      alert('Thank you for subscribing! We\'ll keep you updated.');
      this.reset();
    });
  });
  