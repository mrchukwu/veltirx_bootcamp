// ===================================
// DOM Content Loaded Event Listener
// ===================================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initMobileMenu();
  initScrollEvents();
  initTabSwitching();
  initTestimonialCarousel();
  initFAQAccordion();
  initFormValidation();
  initSmoothScrolling();
  initAnimationsOnScroll();
});

// ===================================
// Mobile Menu Functionality
// ===================================
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }
}

// ===================================
// Navbar Scroll Effects
// ===================================
function initScrollEvents() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===================================
// Tab Switching Functionality
// ===================================
function initTabSwitching() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

// ===================================
// Testimonial Carousel
// ===================================
let currentTestimonial = 1;
let testimonialInterval;

function initTestimonialCarousel() {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");

  if (testimonialCards.length > 0) {
    // Auto-rotate testimonials
    testimonialInterval = setInterval(nextTestimonial, 5000);

    // Pause on hover
    const carousel = document.querySelector(".testimonials-carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", () =>
        clearInterval(testimonialInterval),
      );
      carousel.addEventListener("mouseleave", () => {
        testimonialInterval = setInterval(nextTestimonial, 5000);
      });
    }
  }
}

function showTestimonial(n) {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");

  if (n > testimonialCards.length) currentTestimonial = 1;
  if (n < 1) currentTestimonial = testimonialCards.length;

  testimonialCards.forEach((card) => card.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  if (testimonialCards[currentTestimonial - 1]) {
    testimonialCards[currentTestimonial - 1].classList.add("active");
  }
  if (dots[currentTestimonial - 1]) {
    dots[currentTestimonial - 1].classList.add("active");
  }
}

function nextTestimonial() {
  currentTestimonial++;
  showTestimonial(currentTestimonial);
}

function previousTestimonial() {
  currentTestimonial--;
  showTestimonial(currentTestimonial);
}

function currentTestimonialSlide(n) {
  currentTestimonial = n;
  showTestimonial(currentTestimonial);
}

// Global functions for button clicks
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;
window.currentTestimonial = currentTestimonialSlide;

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    // Close all other FAQ items
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
    // Toggle current one
    item.classList.toggle("active");
  });
});

// function initFAQAccordion() {
//     const faqQuestions = document.querySelectorAll('.faq-question');

//     faqQuestions.forEach(question => {
//         question.addEventListener('click', function() {
//             const faqItem = this.parentElement;
//             const isActive = faqItem.classList.contains('active');

//             // Close all FAQ items
//             document.querySelectorAll('.faq-item').forEach(item => {
//                 item.classList.remove('active');
//             });

//             // Open clicked item if it wasn't active
//             if (!isActive) {
//                 faqItem.classList.add('active');
//             }
//         });
//     });
// }

// Global function for FAQ toggle
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

window.toggleFAQ = toggleFAQ;

// ===================================
// Form Validation
// ===================================
function initFormValidation() {
  // Contact form validation
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm);
  }

  // Enrollment form validation
  const enrollmentForm = document.querySelector(".enrollment-form");
  if (enrollmentForm) {
    // Real-time validation
    const inputs = enrollmentForm.querySelectorAll("input, select");
    inputs.forEach((input) => {
      input.addEventListener("blur", validateField);
      input.addEventListener("input", clearFieldError);
    });
  }
}

function handleContactForm(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');

  // Add loading state
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
    showNotification(
      "Message sent successfully! We'll get back to you soon.",
      "success",
    );
    form.reset();
  }, 2000);
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Clear previous errors
  clearFieldError(field);

  // Validation rules
  switch (field.type) {
    case "text":
      if (value.length < 2) {
        isValid = false;
        errorMessage = "Name must be at least 2 characters long";
      }
      break;
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
      break;
    case "tel":
      const phoneRegex = /^[\+]?[0-9]{10,15}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ""))) {
        isValid = false;
        errorMessage = "Please enter a valid phone number";
      }
      break;
  }

  if (field.tagName === "SELECT" && !value) {
    isValid = false;
    errorMessage = "Please select an option";
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
  }

  return isValid;
}

function clearFieldError(field) {
  if (typeof field === "object" && field.target) {
    field = field.target;
  }

  field.classList.remove("error");
  const errorElement = field.parentElement.querySelector(".field-error");
  if (errorElement) {
    errorElement.remove();
  }
}

function showFieldError(field, message) {
  field.classList.add("error");

  // Create error element
  const errorElement = document.createElement("div");
  errorElement.className = "field-error";
  errorElement.textContent = message;
  errorElement.style.color = "#e53e3e";
  errorElement.style.fontSize = "0.8rem";
  errorElement.style.marginTop = "0.25rem";

  field.parentElement.appendChild(errorElement);
}

// ===================================
// Paystack Payment Integration
// ===================================

// Encode the Paystack link (obfuscation)
const encodedLink =
  "aHR0cHM6Ly9wYXlzdGFjay5zaG9wL3BheS92ZWx0cml4LWphdmFjcmlwdC1ib290Y2FtcA==";

document.getElementById("payBtn").addEventListener("click", () => {
  // Decode link when button is clicked
  const decodedLink = atob(encodedLink);
  window.location.href = decodedLink;
});

function initiatePayment() {
  // Get form data
  const name = document.getElementById("student-name").value.trim();
  const email = document.getElementById("student-email").value.trim();
  const phone = document.getElementById("student-phone").value.trim();
  const experience = document.getElementById("experience-level").value;
  const paymentType = document.querySelector(
    'input[name="payment"]:checked',
  ).value;

  // Validate form
  if (!validateEnrollmentForm()) {
    return;
  }

  // Calculate amount based on payment type
  let amount = paymentType === "full" ? 50000000 : 18000000; // Amount in kobo (NGN)

  const enrollBtn = document.getElementById("enroll-btn");
  enrollBtn.classList.add("loading");
  enrollBtn.disabled = true;

  // Paystack configuration
  const handler = PaystackPop.setup({
    key: "pk_test_your_paystack_public_key", // Replace with your actual Paystack public key
    email: email,
    amount: amount,
    currency: "NGN",
    ref: generateReference(),
    metadata: {
      name: name,
      phone: phone,
      experience_level: experience,
      payment_type: paymentType,
      bootcamp: "JavaScript Mastery Bootcamp",
    },
    callback: function (response) {
      // Payment successful
      handlePaymentSuccess(response);
    },
    onClose: function () {
      // Payment cancelled
      enrollBtn.classList.remove("loading");
      enrollBtn.disabled = false;
      showNotification(
        "Payment cancelled. You can try again when ready.",
        "info",
      );
    },
  });

  handler.openIframe();
}

function validateEnrollmentForm() {
  const name = document.getElementById("student-name");
  const email = document.getElementById("student-email");
  const phone = document.getElementById("student-phone");
  const experience = document.getElementById("experience-level");

  let isValid = true;

  // Clear previous errors
  [name, email, phone, experience].forEach(clearFieldError);

  // Validate each field
  if (!validateField({ target: name })) isValid = false;
  if (!validateField({ target: email })) isValid = false;
  if (!validateField({ target: phone })) isValid = false;
  if (!validateField({ target: experience })) isValid = false;

  if (!isValid) {
    showNotification("Please fill in all required fields correctly.", "error");
  }

  return isValid;
}

function generateReference() {
  return "jsm_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
}

function handlePaymentSuccess(response) {
  const enrollBtn = document.getElementById("enroll-btn");
  enrollBtn.classList.remove("loading");
  enrollBtn.disabled = false;

  // Show success message
  showNotification(
    "Payment successful! Welcome to JavaScript Mastery Bootcamp!",
    "success",
  );

  // Here you would typically send the payment details to your server
  console.log("Payment successful:", response);

  // Redirect or show success page
  setTimeout(() => {
    showSuccessModal(response);
  }, 2000);
}

function showSuccessModal(paymentResponse) {
  const modal = document.createElement("div");
  modal.className = "success-modal";
  modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Enrollment Successful!</h2>
            <p>Congratulations! You've successfully enrolled in the JavaScript Mastery Bootcamp.</p>
            <p><strong>Transaction ID:</strong> ${paymentResponse.reference}</p>
            <p>Check your email for course access details and next steps.</p>
            <button onclick="closeSuccessModal()" class="btn btn-primary">Get Started</button>
        </div>
    `;

  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

  document.body.appendChild(modal);
}

function closeSuccessModal() {
  const modal = document.querySelector(".success-modal");
  if (modal) {
    modal.remove();
  }
}

// Global functions
window.initiatePayment = initiatePayment;
window.closeSuccessModal = closeSuccessModal;

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScrolling() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Global scroll functions
function scrollToEnroll() {
  document.getElementById("enroll").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function playVideo() {
  // Placeholder for video modal
  showNotification(
    "Video demo coming soon! Contact us for a live demo.",
    "info",
  );
}

window.scrollToEnroll = scrollToEnroll;
window.playVideo = playVideo;

// ===================================
// Animations on Scroll
// ===================================
function initAnimationsOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(
      ".benefit-card, .instructor-card, .module-card, .timeline-item, .project-card",
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Number counter animation
  const counters = document.querySelectorAll(".stat-number");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.textContent.replace(/\D/g, ""));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = element.textContent.includes("+")
        ? target + "+"
        : element.textContent.includes("%")
        ? target + "%"
        : target;
      clearInterval(timer);
    } else {
      const suffix = element.textContent.includes("+")
        ? "+"
        : element.textContent.includes("%")
        ? "%"
        : "";
      element.textContent = Math.floor(current) + suffix;
    }
  }, 16);
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${
                  type === "success"
                    ? '<i class="fas fa-check-circle"></i>'
                    : type === "error"
                    ? '<i class="fas fa-exclamation-circle"></i>'
                    : '<i class="fas fa-info-circle"></i>'
                }
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

  // Notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#48bb78"
            : type === "error"
            ? "#e53e3e"
            : "#667eea"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10001;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOutRight 0.3s ease-in forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add CSS for animations
const animationStyles = `
<style>
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    margin-left: auto;
}

.field-error {
    color: #e53e3e !important;
    font-size: 0.8rem !important;
    margin-top: 0.25rem !important;
}

.error {
    border-color: #e53e3e !important;
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1) !important;
}

.success-modal .modal-content {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    max-width: 500px;
    margin: 2rem;
}

.success-modal .success-icon {
    font-size: 4rem;
    color: #48bb78;
    margin-bottom: 1rem;
}

.success-modal h2 {
    color: #2d3748;
    margin-bottom: 1rem;
}

.success-modal p {
    color: #718096;
    margin-bottom: 1rem;
    line-height: 1.6;
}
</style>
`;

// Inject animation styles
if (!document.querySelector("#animation-styles")) {
  const styleElement = document.createElement("div");
  styleElement.id = "animation-styles";
  styleElement.innerHTML = animationStyles;
  document.head.appendChild(styleElement);
}

// ===================================
// Console Welcome Message
// ===================================
console.log(`
🚀 JavaScript Mastery Bootcamp - Landing Page Loaded!
   
   Features Initialized:
   ✅ Mobile Menu Navigation
   ✅ Smooth Scrolling
   ✅ Tab Switching
   ✅ Testimonial Carousel  
   ✅ FAQ Accordion
   ✅ Form Validation
   ✅ Paystack Payment Integration
   ✅ Scroll Animations
   ✅ Notification System
   
   Ready to transform coding careers! 💻
`);

// Export functions for testing (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initMobileMenu,
    initTestimonialCarousel,
    initFAQAccordion,
    initFormValidation,
    validateField,
    showNotification,
    formatCurrency,
    isValidEmail,
  };
}

//
