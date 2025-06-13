// Simple animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements
    document.querySelectorAll('.section-header, .service-card, .process-step, .cta-section h2, .cta-section p, .cta-btn').forEach(el => {
        observer.observe(el);
    });
});