document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic contact form validation and submission handling (conceptual)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;

            // Simple validation
            if (name === '') {
                alert('Please enter your name.');
                isValid = false;
            }
            if (email === '') {
                alert('Please enter your email.');
                isValid = false;
            } else {
                // Basic email format check
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    isValid = false;
                }
            }
            if (message === '') {
                alert('Please enter your message.');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                // For this example, we'll just log it and show a success message
                console.log('Form submitted:', { name, email, message });
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset(); // Clear the form
            }
        });
    }

    // Optional: Add a subtle scroll animation to project cards or other elements
    const animatedElements = document.querySelectorAll('.project-card'); // Add other selectors as needed

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    animatedElements.forEach(el => {
        el.style.opacity = 0; // Initially hide elements
        el.style.transform = 'translateY(20px)'; // Move them down slightly
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });

});