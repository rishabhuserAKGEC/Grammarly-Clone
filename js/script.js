// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            addNavLinkListeners();
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// Add event listeners for navigation links
function addNavLinkListeners() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage;
        });
    });
}

// Form submission handler for Contact Page
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});

// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            addNavLinkListeners();
            addModalListeners();
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    setupSmoothScroll();
    setupFormValidation();
    setupContentSlider();
});

// Add event listeners for navigation links
function addNavLinkListeners() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage;
        });
    });
}

// Add event listeners for modals
function addModalListeners() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal .close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// Form validation for Contact Page
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let isValid = true;

            if (name.trim() === '') {
                isValid = false;
                alert('Name is required.');
            }

            if (email.trim() === '' || !validateEmail(email)) {
                isValid = false;
                alert('Valid email is required.');
            }

            if (message.trim() === '') {
                isValid = false;
                alert('Message is required.');
            }

            if (isValid) {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }
}

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Content slider for features section
function setupContentSlider() {
    const slider = document.querySelector('.features');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }
}


