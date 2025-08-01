/**
 * Masonry Layout for Ghost Tag Pages
 * Maintains chronological left-to-right order while creating a true masonry effect
 */

export function initTagMasonry() {
    // Only target tag page post containers
    const containers = document.querySelectorAll('.tag-content .posts-container');

    containers.forEach(container => {
        setupMasonry(container);
    });
}

async function setupMasonry(container) {
    // Check for native masonry support (future-proofing)
    if (getComputedStyle(container).gridTemplateRows === 'masonry') {
        console.log('Native masonry detected, skipping polyfill');
        return;
    }

    // Add class for CSS targeting
    container.classList.add('masonry-active');

    // Flag to prevent infinite loops
    let isResizing = false;

    // Only apply masonry on desktop (768px+)
    const applyMasonry = async () => {
        // Prevent recursive calls
        if (isResizing) return;
        isResizing = true;

        if (window.innerWidth < 768) {
            // Reset to normal layout on mobile
            container.style.gridAutoRows = '';
            container.style.rowGap = '';
            Array.from(container.children).forEach(item => {
                item.style.gridRowEnd = '';
            });
            isResizing = false;
            return;
        }

        // Apply masonry grid settings
        container.style.gridAutoRows = '0px';
        container.style.setProperty('row-gap', '1px', 'important');

        // Get items and column gap
        const items = Array.from(container.children);
        const computedStyle = getComputedStyle(container);
        const colGap = parseFloat(computedStyle.columnGap) || 32; // fallback to 2rem

        // Wait for all media to load
        await waitForMedia(container);

        // Small delay to ensure layout has settled
        await new Promise(resolve => setTimeout(resolve, 100));

        // Calculate and apply heights
        items.forEach(item => {
            // Reset any previous grid-row-end
            item.style.gridRowEnd = '';

            // Force layout recalculation
            void item.offsetHeight;

            // Get the natural height
            const rect = item.getBoundingClientRect();
            const height = rect.height;

            // With grid-auto-rows: 0px and row-gap: 1px, each "row" is 1px
            // So we need exactly height + desired gap number of rows
            const rowSpan = Math.round(height + colGap);
            item.style.gridRowEnd = `span ${rowSpan}`;
        });

        // Reset flag after a delay
        setTimeout(() => {
            isResizing = false;
        }, 200);
    };

    // Initial layout
    await applyMasonry();

    // Handle window resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(applyMasonry, 250);
    });

    // Optional: Re-layout when fonts load
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            setTimeout(applyMasonry, 100);
        });
    }
}

/**
 * Wait for all images and videos in container to load
 */
async function waitForMedia(container) {
    const promises = [];

    // Wait for images
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete && img.src) {
            promises.push(new Promise(resolve => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });

                // Timeout after 3 seconds per image
                setTimeout(resolve, 3000);
            }));
        }
    });

    // Wait for videos
    const videos = container.querySelectorAll('video');
    videos.forEach(video => {
        if (video.readyState < 4) {
            promises.push(new Promise(resolve => {
                video.addEventListener('loadedmetadata', resolve, { once: true });
                video.addEventListener('error', resolve, { once: true });

                // Timeout after 3 seconds per video
                setTimeout(resolve, 3000);
            }));
        }
    });

    // Wait for all media with a global timeout
    if (promises.length > 0) {
        await Promise.race([
            Promise.all(promises),
            new Promise(resolve => setTimeout(resolve, 5000))
        ]);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTagMasonry);
} else {
    // Small delay to ensure everything is rendered
    setTimeout(initTagMasonry, 100);
}
