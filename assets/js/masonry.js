// Add this to your assets/js/index.js file (or create a separate masonry.js file)

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

    // Only apply masonry on desktop (768px+)
    const applyMasonry = async () => {
        if (window.innerWidth < 768) {
            // Reset to normal layout on mobile
            container.style.gridAutoRows = '';
            container.style.rowGap = '';
            Array.from(container.children).forEach(item => {
                item.style.gridRowEnd = '';
            });
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

        // Calculate and apply heights
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const height = rect.height;

            // Set the grid row span based on item height + gap
            item.style.gridRowEnd = `span ${Math.round(height + colGap)}`;
        });
    };

    // Initial layout
    await applyMasonry();

    // Create resize observer for container changes
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(debounce(async () => {
            await applyMasonry();
        }, 150));

        resizeObserver.observe(container);
    }

    // Handle window resize
    window.addEventListener('resize', debounce(applyMasonry, 150));
}

/**
 * Wait for all images and videos in container to load
 */
async function waitForMedia(container) {
    const promises = [];

    // Wait for images
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            promises.push(new Promise(resolve => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
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
            }));
        }
    });

    // Wait for all media or timeout after 5 seconds
    if (promises.length > 0) {
        await Promise.race([
            Promise.all(promises),
            new Promise(resolve => setTimeout(resolve, 5000))
        ]);
    }
}

/**
 * Debounce helper function
 */
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTagMasonry);
} else {
    initTagMasonry();
}

// Export for use in main index.js
export default initTagMasonry;

/*
 * Integration with your existing index.js:
 *
 * import { initTagMasonry } from './masonry.js';
 *
 * // Or if adding directly to index.js, just call:
 * initTagMasonry();
 *
 * // If you have infinite scroll or load more functionality:
 * // Call initTagMasonry() after new posts are loaded
 */
