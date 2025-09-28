// PERFORMANCE OPTIMIZATIONS
document.addEventListener('DOMContentLoaded', function() {
  
  // Lazy loading for images
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });
  });

  // Keyboard navigation improvements
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.show');
      if (activeModal) {
        activeModal.classList.remove('show');
      }
    }
    
    if (e.key === 'Enter' && e.target.matches('.card, .portfolio-item')) {
      e.target.click();
    }
  });
});

// Form validation function
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    clearError(input);
    
    if (!input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    } else if (input.type === 'email' && !isValidEmail(input.value)) {
      showError(input, 'Please enter a valid email address');
      isValid = false;
    } else if (input.type === 'tel' && !isValidPhone(input.value)) {
      showError(input, 'Please enter a valid phone number');
      isValid = false;
    }
  });

  return isValid;
}

function showError(input, message) {
  input.classList.add('error');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.setAttribute('role', 'alert');
  input.parentNode.appendChild(errorDiv);
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  input.classList.remove('error');
  const errorDiv = input.parentNode.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.remove();
  }
  input.removeAttribute('aria-invalid');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[0-9]{10,14}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Show success notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white z-50 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`;
  notification.textContent = message;
  notification.setAttribute('role', 'alert');
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}
