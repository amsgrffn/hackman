/**
 * Continuous Scroll Featured Posts Carousel
 * Position-preserving implementation with pause functionality
 */

class ContinuousCarousel {
    constructor(element) {
        // Main elements
        this.carousel = element;
        this.track = this.carousel.querySelector('.carousel-track');
        this.slides = Array.from(this.carousel.querySelectorAll('.carousel-slide'));

        // Control buttons
        this.slowDownButton = this.carousel.querySelector('.carousel-button.slow-down');
        this.speedUpButton = this.carousel.querySelector('.carousel-button.speed-up');
        this.pauseButton = this.carousel.querySelector('.carousel-button.pause-toggle');

        // Configuration
        this.baseSpeed = 0.05; // Base speed in pixels per millisecond
        this.speedMultipliers = {
            slow: 0.5,    // Half speed
            normal: 1.0,  // Normal speed
            fast: 2.0     // Double speed
        };
        this.hoverMultiplier = 0.4; // 40% of normal speed when hovering

        // State tracking
        this.currentSpeedSetting = 'normal';
        this.isHovering = false;
        this.isPaused = false;
        this.position = 0;
        this.lastTimestamp = null;
        this.totalWidth = 0;
        this.animationId = null;

        // Only initialize if we have enough slides
        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        // Calculate slide dimensions
        this.calculateDimensions();

        // Clone slides to create continuous effect
        this.cloneSlides();

        // Add event listeners
        this.addSpeedControls();
        this.addHoverEffect();
        this.addPauseControl();

        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));

        // Start the animation
        this.startAnimation();
    }

    calculateDimensions() {
        if (this.slides.length === 0) return;

        // Get slide width including margin
        const slide = this.slides[0];
        const style = window.getComputedStyle(slide);
        const marginRight = parseInt(style.marginRight || 0);
        this.slideWidth = slide.offsetWidth + marginRight;

        // Calculate total width to scroll (width of 6 slides)
        // We'll reset position after scrolling this distance
        this.totalWidth = this.slideWidth * 6;
    }

    cloneSlides() {
        // For a truly continuous effect, we need to clone slides
        const minSlidesNeeded = Math.ceil(window.innerWidth / this.slideWidth) * 2;

        // Only clone if we don't have enough slides
        if (this.slides.length < minSlidesNeeded) {
            // How many sets of clones we need
            const setsNeeded = Math.ceil(minSlidesNeeded / this.slides.length);

            for (let i = 0; i < setsNeeded; i++) {
                this.slides.forEach(slide => {
                    const clone = slide.cloneNode(true);
                    this.track.appendChild(clone);
                });
            }
        }
    }

    addSpeedControls() {
        if (!this.slowDownButton || !this.speedUpButton) return;

        // Slow down button
        this.slowDownButton.addEventListener('click', () => {
            if (this.currentSpeedSetting === 'normal') {
                this.currentSpeedSetting = 'slow';
            } else if (this.currentSpeedSetting === 'fast') {
                this.currentSpeedSetting = 'normal';
            }
        });

        // Speed up button
        this.speedUpButton.addEventListener('click', () => {
            if (this.currentSpeedSetting === 'normal') {
                this.currentSpeedSetting = 'fast';
            } else if (this.currentSpeedSetting === 'slow') {
                this.currentSpeedSetting = 'normal';
            }
        });
    }

    addHoverEffect() {
        // Slow down on hover
        this.track.addEventListener('mouseenter', () => {
            this.isHovering = true;
        });

        // Resume normal speed on mouse leave
        this.track.addEventListener('mouseleave', () => {
            this.isHovering = false;
        });
    }

    addPauseControl() {
        if (!this.pauseButton) return;

        this.pauseButton.addEventListener('click', () => {
            this.isPaused = !this.isPaused;

            // Update button state and accessibility
            if (this.isPaused) {
                this.pauseButton.setAttribute('data-state', 'paused');
                this.pauseButton.setAttribute('aria-label', 'Play');
            } else {
                this.pauseButton.setAttribute('data-state', 'playing');
                this.pauseButton.setAttribute('aria-label', 'Pause');
            }
        });
    }

    getCurrentSpeed() {
        // If paused, return 0 speed
        if (this.isPaused) {
            return 0;
        }

        // Calculate current speed based on settings and hover state
        let multiplier = this.speedMultipliers[this.currentSpeedSetting];

        // Apply hover effect if hovering
        if (this.isHovering) {
            multiplier *= this.hoverMultiplier;
        }

        return this.baseSpeed * multiplier;
    }

    startAnimation() {
        // Start the animation loop
        this.lastTimestamp = performance.now();
        this.animateCarousel(this.lastTimestamp);
    }

    animateCarousel(timestamp) {
        // Calculate time elapsed since last frame
        const elapsed = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;

        // Calculate how far to move based on current speed
        const pixelsToMove = elapsed * this.getCurrentSpeed();

        // Update position
        this.position -= pixelsToMove;

        // Reset position when we've scrolled through totalWidth
        // This creates the infinite scroll effect
        if (Math.abs(this.position) >= this.totalWidth) {
            this.position = 0;
        }

        // Apply the transform
        this.track.style.transform = `translateX(${this.position}px)`;

        // Continue the animation
        this.animationId = requestAnimationFrame(this.animateCarousel.bind(this));
    }

    handleResize() {
        // Recalculate dimensions
        this.calculateDimensions();

        // Check if we need more clones
        const currentSlides = this.carousel.querySelectorAll('.carousel-slide');
        const minSlidesNeeded = Math.ceil(window.innerWidth / this.slideWidth) * 2;

        if (currentSlides.length < minSlidesNeeded) {
            this.cloneSlides();
        }
    }
}

/**
 * Initialize the carousel when the DOM is loaded
 */
function initContinuousCarousel() {
    const carouselElement = document.querySelector('.featured-carousel');
    if (carouselElement && carouselElement.querySelector('.carousel-track.continuous')) {
        new ContinuousCarousel(carouselElement);
    }
}

export { initContinuousCarousel };
