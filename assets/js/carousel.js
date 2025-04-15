/**
 * Featured Posts Carousel
 * Handles carousel functionality for featured posts on the homepage
 */

class FeaturedCarousel {
    constructor(element) {
        // Main elements
        this.carousel = element;
        this.track = this.carousel.querySelector('.carousel-track');
        this.slides = Array.from(this.carousel.querySelectorAll('.carousel-slide'));
        this.pagination = this.carousel.querySelector('.carousel-pagination');
        this.prevButton = this.carousel.querySelector('.carousel-button.prev');
        this.nextButton = this.carousel.querySelector('.carousel-button.next');

        // Configuration
        this.currentIndex = 0;
        this.slidesPerView = this.getSlidesPerView();
        this.slideWidth = 100 / this.slidesPerView;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = 5000; // 5 seconds
        this.autoPlayTimer = null;
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Initialize the carousel
        this.init();
    }

    init() {
        if (this.totalSlides <= 0) return;

        // Set up slide widths
        this.setupSlides();

        // Create pagination dots
        this.createPagination();

        // Add event listeners
        this.addEventListeners();

        // Start autoplay
        this.startAutoPlay();

        // Set initial slide
        this.goToSlide(0);

        // Update on resize
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    setupSlides() {
        // Set width for each slide based on slidesPerView
        this.slides.forEach(slide => {
            slide.style.width = `${this.slideWidth}%`;
        });
    }

    getSlidesPerView() {
        // Determine how many slides to show based on viewport width
        if (window.innerWidth >= 1200) {
            return 4; // Desktop: show 3 slides
        } else if (window.innerWidth >= 768) {
            return 2; // Tablet: show 2 slides
        } else {
            return 1; // Mobile: show 1 slide
        }
    }

    createPagination() {
        // Create pagination dots based on number of slides and slides per view
        const totalDots = Math.ceil(this.totalSlides / this.slidesPerView);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.classList.add('pagination-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);

            dot.addEventListener('click', () => {
                this.goToSlide(i * this.slidesPerView);
            });

            this.pagination.appendChild(dot);
        }
    }

    addEventListeners() {
        // Previous button
        if (this.prevButton) {
            this.prevButton.addEventListener('click', this.prevSlide.bind(this));
        }

        // Next button
        if (this.nextButton) {
            this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        }

        // Pause autoplay on hover
        this.carousel.addEventListener('mouseenter', this.pauseAutoPlay.bind(this));
        this.carousel.addEventListener('mouseleave', this.startAutoPlay.bind(this));

        // Touch events for swipe
        this.carousel.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        this.carousel.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
        this.carousel.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });

        // Focus management
        this.carousel.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleResize() {
        // Update slides per view on resize
        const newSlidesPerView = this.getSlidesPerView();

        if (newSlidesPerView !== this.slidesPerView) {
            this.slidesPerView = newSlidesPerView;
            this.slideWidth = 100 / this.slidesPerView;

            // Recalculate slide widths
            this.setupSlides();

            // Reset pagination
            this.pagination.innerHTML = '';
            this.createPagination();

            // Go to first slide when view changes
            this.goToSlide(0);
        }
    }

    goToSlide(index) {
        if (this.isAnimating) return;

        // Clamp index to valid range
        if (index < 0) {
            index = 0;
        } else if (index > this.totalSlides - this.slidesPerView) {
            index = this.totalSlides - this.slidesPerView;
        }

        this.currentIndex = index;

        // Transform the track
        const translateX = -1 * (this.slideWidth * this.currentIndex);
        this.track.style.transform = `translateX(${translateX}%)`;

        // Update pagination
        this.updatePagination();

        // Set animating flag briefly to prevent rapid clicking
        this.isAnimating = true;
        setTimeout(() => {
            this.isAnimating = false;
        }, 500); // Match the transition duration
    }

    updatePagination() {
        // Update active pagination dot
        const dots = this.pagination.querySelectorAll('.pagination-dot');
        const activeDotIndex = Math.floor(this.currentIndex / this.slidesPerView);

        dots.forEach((dot, index) => {
            if (index === activeDotIndex) {
                dot.classList.add('active');
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.classList.remove('active');
                dot.removeAttribute('aria-current');
            }
        });
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - this.slidesPerView);
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + this.slidesPerView);
    }

    startAutoPlay() {
        this.pauseAutoPlay(); // Clear any existing timer

        this.autoPlayTimer = setInterval(() => {
            const nextIndex = this.currentIndex + this.slidesPerView;

            if (nextIndex > this.totalSlides - this.slidesPerView) {
                // Loop back to first slide
                this.goToSlide(0);
            } else {
                this.goToSlide(nextIndex);
            }
        }, this.autoPlayInterval);
    }

    pauseAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }

    handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
        this.pauseAutoPlay();
    }

    handleTouchMove(event) {
        this.touchEndX = event.touches[0].clientX;
    }

    handleTouchEnd() {
        const touchDiff = this.touchStartX - this.touchEndX;

        // Detect swipe (minimum 50px difference)
        if (Math.abs(touchDiff) > 50) {
            if (touchDiff > 0) {
                // Swipe left, go to next slide
                this.nextSlide();
            } else {
                // Swipe right, go to previous slide
                this.prevSlide();
            }
        }

        this.startAutoPlay();
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.prevSlide();
                break;
            case 'ArrowRight':
                this.nextSlide();
                break;
        }
    }
}

/**
 * Initialize the carousel when the DOM is loaded
 */
function initFeaturedCarousel() {
    const carouselElement = document.querySelector('.featured-carousel');
    if (carouselElement) {
        new FeaturedCarousel(carouselElement);
    }
}

export { initFeaturedCarousel };
