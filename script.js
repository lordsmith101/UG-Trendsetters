document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed inset-y-0 right-0 w-64 bg-luxury-black z-50 p-6 shadow-lg';
    mobileMenu.innerHTML = `
        <div class="flex justify-end mb-8">
            <button id="close-mobile-menu" class="text-luxury-gold">
                <i data-feather="x"></i>
            </button>
        </div>
        <nav class="flex flex-col space-y-6">
            <a href="index.html" class="text-luxury-gold hover:text-luxury-light transition">Home</a>
            <a href="watches.html" class="text-luxury-gold hover:text-luxury-light transition">Watches</a>
            <a href="perfumes.html" class="text-luxury-gold hover:text-luxury-light transition">Perfumes</a>
            <a href="tips.html" class="text-luxury-gold hover:text-luxury-light transition">Tips</a>
            <a href="contact.html" class="text-luxury-gold hover:text-luxury-light transition">Contact</a>
</nav>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        feather.replace();
        document.getElementById('close-mobile-menu').addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    });

    // Scroll reveal animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .scale-hover');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Product hover effect
    const productCards = document.querySelectorAll('[class*="hover:scale"]');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.borderColor = 'rgba(212, 175, 55, 0.2)';
        });
    });
});

// Replace feather icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});