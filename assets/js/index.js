// Import the continuous carousel module
import { initContinuousCarousel } from './carousel-continuous.js';

// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.
// Import CSS
import "../css/index.css";
// Import JS

/**
 * Main JavaScript for the Hackman Blog Theme
 */

 /**
  * Testimonials Configuration
  * Controls the rotation of testimonial quotes
  */
  const TESTIMONIALS_CONFIG = {
      updateInterval: 7000,
      fadeTransitionMs: 500,
      testimonials: [
          {
              quote: "Newsletters suck. This one sucks the most.",
              author: "John Bender",
              avatar: "assets/media/avatars/bender.webp",
              link: "https://thebreakfastclub.fandom.com/wiki/John_Bender"
          },
          {
              quote: "I ain't got time to read this crap",
              author: "Blain Cooper",
              avatar: "assets/media/avatars/blain.webp",
              link: "https://avp.fandom.com/wiki/Blain_Cooper"
          },
          {
              quote: "My life's been one long, glorious ‘sitting on beach earning twenty percent' vibe-fest since becoming a member of You Can't Be Serious.",
              author: "Hans Gruber",
              avatar: "assets/media/avatars/hans.webp",
              link: "https://en.wikipedia.org/wiki/Hans_Gruber"
          },
          {
              quote: "I pity the fool who don't support You Can't Be Serious.",
              author: "Clubber Lang",
              avatar: "assets/media/avatars/clubber.webp",
              link: "https://en.wikipedia.org/wiki/Clubber_Lang"
          },
          {
              quote: "This site was, is, and will always be nada",
              author: "Steff McKee",
              avatar: "assets/media/avatars/steff.webp",
              link: "https://en.wikipedia.org/wiki/Pretty_in_Pink"
          },
          {
              quote: "You're God Damn right I read You Can't Be Serious.",
              author: "Colonel Nathan R. Jessup",
              avatar: "assets/media/avatars/jessup.webp",
              link: "https://villains.fandom.com/wiki/Colonel_Nathan_R._Jessup"
          },
          {
              quote: "These people are a stain on the internet. It's best to go about your daily routine and forget they exist.",
              author: "Mildred Ratched",
              avatar: "assets/media/avatars/mildred.webp",
              link: "https://en.wikipedia.org/wiki/Nurse_Ratched"
          },
          {
              quote: "You Can't Be Serious is 90% bullshit, but it’s entertaining. That’s why I read it because it entertains me.",
              author: "Alonzo Harris",
              avatar: "assets/media/avatars/alonzo.webp",
              link: "https://villains.fandom.com/wiki/Alonzo_Harris"
          },
          {
              quote: "All I need are some tasty waves, a cool buzz, You Can't Be Serious, and I'm fine.",
              author: "Jeff Spicoli",
              avatar: "assets/media/avatars/spicoli.webp",
              link: "https://www.theringer.com/2020/08/26/movies/spicoli-fast-times-ridgemont-high-teen-movie"
          },
          {
              quote: "Listen, I don't bother nobody and nobody bothers me but these brothers are pretty cool. They see \u2018em you know.",
              author: "Frank",
              avatar: "assets/media/avatars/frank.webp",
              link: "https://en.wikipedia.org/wiki/They_Live"
          },
          {
              quote: "I won't be back.",
              author: "Cyberdyne Model 101",
              avatar: "assets/media/avatars/t800.avif",
              link: "https://en.wikipedia.org/wiki/Terminator_(character)"
          },
          {
              quote: "My God, it's full of bullshit.",
              author: "David Bowman",
              avatar: "assets/media/avatars/bowman.webp",
              link: "https://2001.fandom.com/wiki/David_Bowman"
          },
          {
              quote: "I'd rather staple my eyelids shut than read this trash.",
              author: "Regina George",
              avatar: "assets/media/avatars/regina.webp",
              link: "https://en.wikipedia.org/wiki/Regina_George_(Mean_Girls)"
          },
          {
              quote: "Hey man, I don't wanna rain on their parade, but these guys won't last seventeen days. Easy. Game over for them man.",
              author: "Private William L. Hudson",
              avatar: "assets/media/avatars/hudson.webp",
              link: "https://en.wikipedia.org/wiki/Hudson_%28Aliens%29"
          },
          {
              quote: "This quitting thing, it's a hard habit to break once you start, but one thing I'll never quit is this website.",
              author: "Morris Buttermaker",
              avatar: "assets/media/avatars/buttermaker.webp",
              link: "https://en.wikipedia.org/wiki/The_Bad_News_Bears"
          },
          {
              quote: "Blogs are teeming petri dishes of malignant mediocrity. Written by mental maggots consuming their own predigested pablum. You Can't Be Serious is the excretion.",
              author: "Lydia Tár",
              avatar: "assets/media/avatars/tar.webp",
              link: "https://en.wikipedia.org/wiki/T%C3%A1r"
          }
      ]
  };

  const WEATHER_ICONS = {
      sunny: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      cloudy: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      'partly cloudy': `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM18 10h-1.26A4 4 0 109 20h9a5 5 0 000-10z"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      rainy: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25M8 13v8M16 13v8M12 15v8"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      drizzle: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25M8 13v8M16 13v8M12 15v8"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      snow: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`,
      foggy: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">
              <path d="M3 8h18M3 12h18M3 16h18"
                    stroke-width="2" stroke-linecap="round"/>
          </svg>`
  };

// Rate limiter utility to prevent abuse
const RateLimiter = {
    getKey(action) {
        // Create a key based on the current minute
        const now = Math.floor(Date.now() / 1000 / 60);
        return `rateLimit_${action}_${now}`;
    },

    increment(action, limit) {
        const key = this.getKey(action);
        // Get current count or start at 0
        let count = parseInt(sessionStorage.getItem(key) || '0');
        count++;
        // Store updated count
        sessionStorage.setItem(key, count.toString());
        return count <= limit;
    },

    checkLimit(action, limit = 60, windowMs = 60000) {
        // Clean up old entries first
        this.cleanup();
        return this.increment(action, limit);
    },

    cleanup() {
        const now = Math.floor(Date.now() / 1000 / 60);
        // Iterate through all storage items
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key && key.startsWith('rateLimit_')) {
                const timeKey = parseInt(key.split('_')[2]);
                // Remove entries older than 5 minutes
                if (now - timeKey > 5) {
                    sessionStorage.removeItem(key);
                }
            }
        }
    }
};

// Sanitize text to prevent XSS attacks
function sanitizeText(text, maxLength = 150) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.textContent
        .slice(0, maxLength)
        .replace(/javascript:|data:|vbscript:|file:|blob:|ftp:|ws:|wss:/i, '')
        .replace(/[<>'"`{}()\[\]]/g, '');
}

// Add to Clipboard functionality
async function handleClipboardClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!RateLimiter.checkLimit('clipboardCopy', 10)) {
        console.warn('Too many clipboard attempts');
        return;
    }

    const article = e.target.closest('article');
    if (!article) return;

    const articleLink = article.querySelector('h2 a');
    const url = articleLink ? articleLink.href : window.location.href;

    try {
        await navigator.clipboard.writeText(url);
        const target = e.target.closest('.copy-url');
        showCopyAlert(target, true);
    } catch (err) {
        console.error('Failed to copy URL:', err);
        showCopyAlert(e.target, false);
    }
}

// Show copy confirmation alert
function showCopyAlert(target, success = true) {
    if (!target) return;

    const dropdown = target.closest('.dropdown');
    if (!dropdown) return;

    // Close the dropdown
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (dropdownContent) {
        dropdownContent.style.display = 'none';
    }

    const rect = dropdown.getBoundingClientRect();
    const alertBox = document.createElement('div');
    alertBox.className = 'copy-alert';
    alertBox.setAttribute('role', 'alert');
    alertBox.setAttribute('aria-live', 'polite');

    Object.assign(alertBox.style, {
        position: 'fixed',
        left: `${rect.left + (rect.width / 2)}px`,
        bottom: `${window.innerHeight - rect.top + 10}px`,
        backgroundColor: success ? '#ffe680' : '#dc3545',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(17 24 39 / 0.1)',
        color: '#403e38',
        padding: '12px 24px',
        borderRadius: '0.5rem',
        zIndex: '1000',
        fontSize: '16px',
        fontWeight: '700',
        opacity: '0',
        transition: 'opacity 0.3s ease-in-out',
        whiteSpace: 'nowrap',
        transform: 'translateX(-50%)'
    });

    // Update the alert message to include an SVG thumbs up icon with a class for styling
    alertBox.innerHTML = success ?
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="alert-icon success-icon"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> URL copied to clipboard' :
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="alert-icon error-icon"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg> Failed to copy URL';
    document.body.appendChild(alertBox);

    requestAnimationFrame(() => {
        alertBox.style.opacity = '1';
        setTimeout(() => {
            alertBox.style.opacity = '0';
            setTimeout(() => alertBox.remove(), 350);
        }, 2000);
    });
}

// Get WhatsApp share URL
function getWhatsAppShareUrl(url, title) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappBase = isMobile ? 'whatsapp://send' : 'https://web.whatsapp.com/send';
    const shareText = `${title}\n\n${url}`;
    return `${whatsappBase}?text=${encodeURIComponent(shareText)}`;
}

// Email sharing handler
function handleEmailShare(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!RateLimiter.checkLimit('emailShare', 10)) {
        console.warn('Too many email share attempts');
        return;
    }

    const article = e.target.closest('article');
    if (!article) return;

    const articleLink = article.querySelector('h2 a');
    const url = articleLink ? articleLink.href : window.location.href;
    const rawTitle = articleLink ? articleLink.textContent : document.title;
    const sanitizedTitle = sanitizeText(rawTitle);

    const emailSubject = `Check out this article: ${sanitizedTitle}`;
    const emailBody = `I thought you might enjoy this article:\n\n${sanitizedTitle}\n\n${url}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Create and click a temporary link
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

// Initialize dropdown toggling with JavaScript instead of CSS hover
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    if (!dropbtn || !dropdownContent) return;

    // Add click event to toggle dropdown
    dropbtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close all other dropdowns first
      document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content !== dropdownContent) {
          content.classList.remove('show');
        }
      });

      // Toggle this dropdown
      dropdownContent.classList.toggle('show');
    });

    // Prevent clicks inside dropdown from closing it
    dropdownContent.addEventListener('click', (e) => {
      // Only stop propagation if it's not a link or button
      // This allows links to work but prevents immediate closing
      if (!e.target.closest('a') && !e.target.closest('button')) {
        e.stopPropagation();
      }
    });

    // Add special handling for the copy URL functionality
    const copyUrlButton = dropdown.querySelector('.copy-url');
    if (copyUrlButton) {
      copyUrlButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Your existing clipboard copy functionality
        handleClipboardClick(e);

        // Don't close the dropdown immediately
        setTimeout(() => {
          dropdownContent.classList.remove('show');
        }, 1500); // Wait 1.5 seconds to close, giving user time to see confirmation
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content.show').forEach(content => {
      content.classList.remove('show');
    });
  });
}

// Initialize social sharing functionality
function initSocialSharing() {
    // Add click event listeners for all sharing buttons
    document.addEventListener('click', (e) => {
        // Prevent too many clicks
        if (!RateLimiter.checkLimit('globalClicks', 100, 60000)) {
            console.warn('Too many clicks detected');
            return;
        }

        // Target is the clicked element OR its closest parent matching the selector
        const copyUrlButton = e.target.closest('.copy-url');
        const emailShareButton = e.target.closest('.email-share');
        const nativeShareButton = e.target.closest('.native-share');
        const whatsappShareButton = e.target.closest('.whatsapp-share');
        const mastodonShareButton = e.target.closest('.mastodon-share');

        // Handle clipboard clicks
        if (copyUrlButton) {
            handleClipboardClick(e);
        }

        // Handle email shares
        if (emailShareButton) {
            handleEmailShare(e);
        }

        // Handle native share
        if (nativeShareButton) {
            e.preventDefault();
            e.stopPropagation();

            const article = e.target.closest('article');
            if (!article) return;

            const articleLink = article.querySelector('h2 a');
            const url = articleLink ? articleLink.href : window.location.href;
            const rawTitle = articleLink ? articleLink.textContent : document.title;
            const sanitizedTitle = sanitizeText(rawTitle);

            const shareData = {
                title: sanitizedTitle,
                text: sanitizedTitle,
                url: url
            };

            // First check if we can share this specific data
            if (navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData)
                    .then(() => console.log('Shared successfully'))
                    .catch((err) => {
                        if (err.name !== 'AbortError') {
                            console.error('Share failed:', err);
                        }
                    });
            } else if (navigator.share) {
                // Fallback to just checking share API availability
                navigator.share(shareData)
                    .then(() => console.log('Shared successfully'))
                    .catch((err) => {
                        if (err.name !== 'AbortError') {
                            console.error('Share failed:', err);
                        }
                    });
            } else {
                console.log('Web Share API not supported');
            }
        }

        // Handle WhatsApp shares
        if (whatsappShareButton) {
            e.preventDefault();
            e.stopPropagation();

            const article = e.target.closest('article');
            if (!article) return;

            const articleLink = article.querySelector('h2 a');
            const url = articleLink ? articleLink.href : window.location.href;
            const rawTitle = articleLink ? articleLink.textContent : document.title;
            const sanitizedTitle = sanitizeText(rawTitle);

            window.open(getWhatsAppShareUrl(url, sanitizedTitle), '_blank', 'noopener,noreferrer');
        }

        // Handle Mastodon shares
        if (mastodonShareButton) {
            e.preventDefault();
            e.stopPropagation();

            if (!RateLimiter.checkLimit('mastodonShare', 10)) {
                console.warn('Too many share attempts');
                return;
            }

            const article = e.target.closest('article');
            if (!article) return;

            const articleLink = article.querySelector('h2 a');
            const url = articleLink ? articleLink.href : window.location.href;
            const rawTitle = articleLink ? articleLink.textContent : document.title;
            const sanitizedTitle = sanitizeText(rawTitle);

            let instance = window.prompt('Enter your Mastodon instance URL:', localStorage.getItem('mastodon-instance') || 'mastodon.social');

            if (instance) {
                const cleanInstance = instance
                    .replace(/^https?:\/\//, '')
                    .replace(/\/$/, '')
                    .replace(/[<>'"`{}()\[\]]/g, '');
                const shareText = `${sanitizedTitle}\n\n${url}`;
                const shareUrl = `https://${cleanInstance}/share?text=${encodeURIComponent(shareText)}`;
                window.open(shareUrl, '_blank', 'noopener,noreferrer');
                localStorage.setItem('mastodon-instance', cleanInstance);
            }
        }
    });

    // Show native share buttons if supported
    if (navigator.share) {
        const nativeShareButtons = document.querySelectorAll('.native-share');
        nativeShareButtons.forEach(btn => {
            btn.style.display = 'block';
        });
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initAppearanceMode();
    initSmoothScroll();
    initTouchFeedback();
    initBookmarkDomainExtractor();
    initDropdowns();
    initSocialSharing();
    initCollapsibleSections();
    initTestimonials();
    initWeatherDisplay();
    initKnicksCounter();
    initStickyHeaderEffect();
    initYouTubeLightbox();
    initPriceToggle();
    initCommentsPanel();
    initWikipediaIconsForCitations();
    initNewsletterModal();
    initBreadcrumbDropdown();
    initContinuousCarousel();

    // Log to confirm script is running
    console.log('Theme JS initialized including social sharing');
});

/**
 * Mobile Menu Functionality
 * Handles the hamburger menu toggle and overlay
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    if (!menuToggle || !mobileMenu || !overlay) return;

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        // Toggle hamburger animation
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = spans[0].style.transform === 'rotate(45deg) translate(5px, 5px)'
            ? ''
            : 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = spans[1].style.opacity === '0' ? '1' : '0';
        spans[2].style.transform = spans[2].style.transform === 'rotate(-45deg) translate(5px, -5px)'
            ? ''
            : 'rotate(-45deg) translate(5px, -5px)';
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

/**
 * Appearance Mode Settings
 * Handles light/dark/auto mode based on user preference
 */
function initAppearanceMode() {
    const appearanceOptions = document.querySelectorAll('input[name="appearance"]');

    // First try the more advanced appearance mode options
    if (appearanceOptions && appearanceOptions.length > 0) {
        initAdvancedAppearanceMode(appearanceOptions);
    } else {
        // Fall back to simple dark mode toggle
        initSimpleDarkModeToggle();
    }
}

/**
 * Advanced appearance mode with light/dark/auto options
 */
function initAdvancedAppearanceMode(appearanceOptions) {
    // Function to apply appearance mode
    function setAppearanceMode(mode) {
        if (mode === 'auto') {
            // Use system preference
            const prefersDark = window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.classList.toggle('dark-mode', prefersDark);
        } else if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Save to localStorage
        safeLocalStorageSet('appearanceMode', mode);
    }

    // Add listeners to radio buttons
    appearanceOptions.forEach(option => {
        option.addEventListener('change', function() {
            setAppearanceMode(this.value);
        });
    });

    // Set initial state based on saved preference
    const savedMode = safeLocalStorageGet('appearanceMode', 'auto');
    const modeInput = document.querySelector(`input[name="appearance"][value="${savedMode}"]`);
    if (modeInput) {
        modeInput.checked = true;
        setAppearanceMode(savedMode);
    }

    // Listen for system preference changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const currentMode = safeLocalStorageGet('appearanceMode', 'auto');
            if (currentMode === 'auto') {
                setAppearanceMode('auto');
            }
        });
    }
}

/**
 * Simple dark mode toggle (fallback)
 */
function initSimpleDarkModeToggle() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (!darkModeToggle) return;

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        safeLocalStorageSet('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Check user preference
    try {
        if ((safeLocalStorageGet('darkMode') === 'true') ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-mode');
        }
    } catch (e) {
        console.log('Unable to check dark mode preferences');
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
}

/**
 * Enable smooth scrolling behavior
 */
function initSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Add touch feedback for mobile devices
 */
function initTouchFeedback() {
    const interactiveElements = document.querySelectorAll('button, .page-link, .card');

    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.opacity = '0.7';
        });

        element.addEventListener('touchend', () => {
            element.style.opacity = '1';
        });
    });
}

/**
 * Extract and display root domain and favicon from bookmark URLs
 *
 * This function finds the first link in bookmark post content,
 * extracts the root domain, and attempts to load the favicon
 * for display purposes.
 */
function initBookmarkDomainExtractor() {
    const bookmarks = document.querySelectorAll('.bookmark');

    bookmarks.forEach(bookmark => {
      const bookmarkComment = bookmark.querySelector('.bookmark-comment');
      if (!bookmarkComment) return;

      const firstLink = bookmarkComment.querySelector('a');
      if (!firstLink) return;

      try {
        // Parse the URL to extract the hostname
        const urlObj = new URL(firstLink.href);
        let displayDomain = urlObj.hostname;
        if (displayDomain.startsWith('www.')) {
          displayDomain = displayDomain.substring(4);
        }

        // Find the tag element instead of pub-date
        const tagEl = bookmark.querySelector('.meta .tag');
        if (!tagEl) return;

        // Create a simple span with domain info
        const domainSpan = document.createElement('span');
        domainSpan.className = 'domain-pill';

        // Create favicon element
        const favicon = document.createElement('img');
        favicon.src = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`;
        favicon.className = 'domain-favicon';
        favicon.width = 16;
        favicon.height = 16;
        favicon.alt = '';

        // Handle favicon load error with Lucide globe icon
        favicon.onerror = function() {
          const faviconContainer = document.createElement('span');
          faviconContainer.className = 'domain-favicon svg-icon';
          faviconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;
          this.parentNode.replaceChild(faviconContainer, this);
        };

        // Add favicon and text to the span
        domainSpan.appendChild(favicon);
        domainSpan.appendChild(document.createTextNode(' ' + displayDomain));

        // Insert after the tag element
        tagEl.parentNode.insertBefore(domainSpan, tagEl.nextSibling);

      } catch (e) {
        console.error('Error parsing URL:', e);
      }
    });
 }

 /**
  * Initialize collapsible sections in the sidebar
  * Handles expanding/collapsing of section content
  * Only the first section is expanded by default
  */
 function initCollapsibleSections() {
   const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

   if (collapsibleHeaders.length === 0) return;

   collapsibleHeaders.forEach((header) => {
     const section = header.parentElement;
     const content = section.querySelector('.collapsible-content');
     const icon = header.querySelector('.collapsible-icon');

     // Set all sections to collapsed by default
     if (!icon.classList.contains('collapsed')) {
       icon.classList.add('collapsed');
     }
     content.classList.add('hidden');
     content.style.maxHeight = '0px';

     // Add click event
     header.addEventListener('click', () => {
       // Toggle icon rotation
       icon.classList.toggle('collapsed');

       // Toggle content visibility
       if (content.classList.contains('hidden')) {
         content.classList.remove('hidden');
         content.style.maxHeight = content.scrollHeight + 'px';
       } else {
         content.style.maxHeight = '0px';
         // Add a delay before adding the hidden class to allow animation to complete
         setTimeout(() => {
           content.classList.add('hidden');
         }, 300);
       }
     });
   });

   // Handle window resize to adjust content heights for open sections
   window.addEventListener('resize', () => {
     const openContents = document.querySelectorAll('.collapsible-content:not(.hidden)');
     openContents.forEach(content => {
       content.style.maxHeight = content.scrollHeight + 'px';
     });
   });
 }

/**
  * Initialize Testimonials Rotation
  * Handles the display and cycling of testimonial quotes
  */
 function initTestimonials() {
     const testimonialElement = document.getElementById('testimonal');
     if (!testimonialElement) return;

     // Create a shuffled array of indices
     let indices = Array.from({ length: TESTIMONIALS_CONFIG.testimonials.length }, (_, i) => i);
     let currentIndex = 0;

     // Fisher-Yates shuffle algorithm
     function shuffleArray(array) {
         for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
     }

     // Initial shuffle
     indices = shuffleArray(indices);

     // Create testimonial HTML with proper sanitization
     function createTestimonialHTML(testimonial) {
         // Sanitize the input data
         const sanitizedQuote = sanitizeHTML(testimonial.quote);
         const sanitizedAuthor = sanitizeHTML(testimonial.author);
         const sanitizedLink = sanitizeHTML(testimonial.link);
         const sanitizedAvatar = sanitizeHTML(testimonial.avatar);

         // Replace straight apostrophes with curly ones
         const withCurlyApostrophes = sanitizedQuote.replaceAll("'", "\u2019");

         return `<div class="testimonial-content">
             <q>${withCurlyApostrophes}</q>
             <cite><img class="avatar"
                  src="${sanitizedAvatar}"
                  alt="${sanitizedAuthor}'s avatar"
                  onerror="this.style.display='none'">
                  <a href="${sanitizedLink}">${sanitizedAuthor} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
             </cite>
         </div>`;
     }

     // Sanitize HTML to prevent XSS
     function sanitizeHTML(html) {
         if (!html) return '';
         // Create a temporary div element
         const div = document.createElement('div');
         // Safely convert HTML to text
         div.textContent = html;
         // Get the sanitized HTML
         return div.innerHTML
             .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
             .replace(/on\w+="[^"]*"/g, '') // Remove event handlers
             .replace(/href="javascript:[^"]*"/g, '') // Remove javascript: URLs
             .replace(/javascript:/gi, '') // Remove javascript: protocol
             .replace(/data:/gi, '') // Remove data: URLs
             .replace(/vbscript:/gi, ''); // Remove vbscript: protocol
     }

     function updateTestimonial() {
         if (!testimonialElement) return;

         const content = testimonialElement.querySelector('.testimonial-content');
         if (content) {
             // Add fade-out class to start the exit animation
             content.classList.add('fade-out');

             setTimeout(() => {
                 // Get testimonial using shuffled index
                 const testimonial = TESTIMONIALS_CONFIG.testimonials[indices[currentIndex]];

                 testimonialElement.innerHTML = createTestimonialHTML(testimonial);
                 const newContent = testimonialElement.querySelector('.testimonial-content');

                 if (newContent) {
                     // Set initial state for entrance animation
                     newContent.classList.add('fade-in');

                     // Force a reflow before starting the entrance animation
                     newContent.offsetHeight;

                     // Start entrance animation after a small delay
                     requestAnimationFrame(() => {
                         requestAnimationFrame(() => {
                             newContent.classList.remove('fade-in');
                         });
                     });
                 }

                 // Increment index and reshuffle if we've shown all quotes
                 currentIndex = (currentIndex + 1) % indices.length;
                 if (currentIndex === 0) {
                     indices = shuffleArray(indices);
                 }
             }, TESTIMONIALS_CONFIG.fadeTransitionMs * 1);
         }
     }

     // Add CSS for testimonial transitions
     const style = document.createElement('style');
     style.textContent = `
         .testimonial-content {
             opacity: 1;
             transform: translateY(0);
             transition: opacity ${TESTIMONIALS_CONFIG.fadeTransitionMs * 1.0}ms ease-in-out,
                         transform ${TESTIMONIALS_CONFIG.fadeTransitionMs * 1.0}ms cubic-bezier(0.16, 1, 0.3, 1);
         }
         .testimonial-content.fade-out {
             opacity: 0;
             transform: translateY(20px);
         }
         .testimonial-content.fade-in {
             opacity: 1;
             transform: translateY(-20px);
         }
     `;
     document.head.appendChild(style);

     // Initialize with first testimonial
     updateTestimonial();

     // Set up interval for testimonial rotation
     setInterval(updateTestimonial, TESTIMONIALS_CONFIG.updateInterval);
 }

 function initWeatherDisplay() {
     const tempElement = document.getElementById('current-temp');
     const conditionElement = document.getElementById('current-condition');
     if (!tempElement || !conditionElement) return;

     // Map WMO weather codes to simple words
     // https://open-meteo.com/en/docs#weathervariables
     const weatherMap = {
         'sunny': [0, 1],
         'partly cloudy': [2],
         'cloudy': [3],
         'foggy': [45, 48],
         'drizzle': [51, 53, 55],
         'rain': [61, 63, 65, 80, 81, 82],
         'snow': [71, 73, 75, 77, 85, 86],
         'thunderstorm': [95, 96, 99]
     };

     function getOneWordWeather(code) {
         for (const [word, codes] of Object.entries(weatherMap)) {
             if (codes.includes(code)) return word;
         }
         return 'cloudy'; // Default fallback
     }

     function updateWeatherIcon(condition) {
         const iconTemplate = WEATHER_ICONS[condition] || WEATHER_ICONS.cloudy;
         const tempLi = tempElement.closest('li');
         const existingIcon = tempLi.querySelector('.weather-icon');

         if (existingIcon) {
             existingIcon.parentElement.remove();
         }

         const iconContainer = document.createElement('span');
         iconContainer.className = 'weather-icon-container';
         iconContainer.innerHTML = iconTemplate;

         tempLi.insertBefore(iconContainer, tempLi.firstChild);
     }

 async function getWeatherData() {
         try {
             // Clear existing cache first
             localStorage.removeItem('weather_cache');

             const lat = 43.66147;
             const lon = -70.25533;
             const url = new URL('https://api.open-meteo.com/v1/forecast');
             url.searchParams.set('latitude', lat);
             url.searchParams.set('longitude', lon);
             url.searchParams.set('current', 'temperature_2m,weather_code');
             url.searchParams.set('temperature_unit', 'fahrenheit');
             url.searchParams.set('_cb', Math.random());

             const response = await fetch(url);
             if (!response.ok) throw new Error('Weather API request failed');

             const data = await response.json();

             // Use ISO string for timestamp
             const result = {
                 temp: Math.round(data.current.temperature_2m),
                 condition: getOneWordWeather(data.current.weather_code),
                 lastUpdated: new Date().toISOString()
             };

             console.log('Weather update:', {
                 temp: result.temp,
                 condition: result.condition,
                 lastUpdated: result.lastUpdated,
                 localTime: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
             });

             localStorage.setItem('weather_cache', JSON.stringify(result));

             return {
                 temp: result.temp,
                 condition: result.condition
             };

         } catch (error) {
             console.error('Error fetching weather:', error);
             return { temp: '--', condition: 'cloudy' };
         }
     }

     async function updateDisplay() {
         try {
             // Clear any existing interval when we start a new update
             if (window.weatherUpdateInterval) {
                 clearInterval(window.weatherUpdateInterval);
             }

             const updateWeatherDisplay = async () => {
                 try {
                     const weather = await getWeatherData();

                     if (!tempElement || !conditionElement) {
                         console.error('Weather elements not found');
                         return;
                     }

                     tempElement.textContent = `${weather.temp}°F`;
                     conditionElement.textContent = ` ${weather.condition}`;
                     updateWeatherIcon(weather.condition);

                     tempElement.setAttribute('aria-label',
                         `Current temperature is ${weather.temp} degrees Fahrenheit and ${weather.condition}`
                     );
                 } catch (error) {
                     console.error('Error updating weather display:', error);
                 }
             };

             // Initial update
             await updateWeatherDisplay();

             // Set up periodic updates every 3 hours
             const threeHours = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
             window.weatherUpdateInterval = setInterval(updateWeatherDisplay, threeHours);

             // Clean up interval when page is hidden
             document.addEventListener('visibilitychange', () => {
                 if (document.hidden && window.weatherUpdateInterval) {
                     clearInterval(window.weatherUpdateInterval);
                 } else if (!document.hidden && !window.weatherUpdateInterval) {
                     // Check when was the last update
                     const cached = localStorage.getItem('weather_cache');
                     if (cached) {
                         const data = JSON.parse(cached);
                         const lastUpdate = new Date(data.lastUpdated);
                         const threeHoursAgo = new Date(Date.now() - threeHours);

                         // Only update if last update was more than 3 hours ago
                         if (lastUpdate < threeHoursAgo) {
                             updateWeatherDisplay();
                             window.weatherUpdateInterval = setInterval(updateWeatherDisplay, threeHours);
                         }
                     } else {
                         // No cache exists, do an update
                         updateWeatherDisplay();
                         window.weatherUpdateInterval = setInterval(updateWeatherDisplay, threeHours);
                     }
                 }
             });

         } catch (error) {
             console.error('Error in weather update system:', error);
         }
     }

     // Start the weather display system
     updateDisplay();
 }

 ////////// Knicks Championship Counter //////////
 function initKnicksCounter() {
     const counterElement = document.getElementById('knicks-counter');
     if (!counterElement) return;

     function calculateDays() {
         const championship = new Date('1973-05-10T00:00:00-05:00'); // EST timezone
         const now = new Date();
         const est = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
         const diff = est - championship;
         const daysSince = Math.floor(diff / (1000 * 60 * 60 * 24));
         counterElement.textContent = `${daysSince.toLocaleString()} Days Ago`;
     }

     // Calculate initial days
     calculateDays();

     // Calculate time until next midnight EST
     function setMidnightUpdate() {
         const now = new Date();
         const est = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
         const tomorrow = new Date(est);
         tomorrow.setDate(tomorrow.getDate() + 1);
         tomorrow.setHours(0, 0, 0, 0);
         const msUntilMidnight = tomorrow - est;

         // Update at midnight
         setTimeout(() => {
             calculateDays();
             // After first midnight, update every 24 hours
             setInterval(calculateDays, 24 * 60 * 60 * 1000);
         }, msUntilMidnight);
     }

     setMidnightUpdate();
 }

/**
  * Sticky Header Scroll Effect
  * Adds a class to the header when scrolling to enable subtle shadow and transparency
  */
 function initStickyHeaderEffect() {
     const header = document.querySelector('.site-header');
     if (!header) return;

     // Initial check in case page is loaded scrolled down
     checkHeaderScroll();

     // Listen for scroll events
     window.addEventListener('scroll', checkHeaderScroll);

     function checkHeaderScroll() {
         // Add .scrolled class when scrolled down (using 10px threshold)
         if (window.scrollY > 10) {
             header.classList.add('scrolled');
         } else {
             header.classList.remove('scrolled');
         }
     }
 }

// YouTube Lightbox Function
 // Add this to your existing index.js file or create a new one

 /**
  * Initialize YouTube Lightbox functionality
  * This function creates a modal for YouTube videos and
  * attaches click handlers to all YouTube links
  */
 function initYouTubeLightbox() {
     // Create the modal element if it doesn't exist
     if (!document.getElementById('youtube-modal')) {
         const modal = document.createElement('div');
         modal.id = 'youtube-modal';
         modal.className = 'youtube-modal';
         modal.innerHTML = `
             <div class="youtube-modal-content">
                 <button class="youtube-modal-close" aria-label="Close video">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                         <circle cx="12" cy="12" r="10"/>
                         <line x1="15" y1="9" x2="9" y2="15"/>
                         <line x1="9" y1="9" x2="15" y2="15"/>
                     </svg>
                 </button>
                 <div class="youtube-modal-iframe-container">
                     <iframe id="youtube-iframe" frameborder="0" allowfullscreen
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                     </iframe>
                 </div>
             </div>
         `;
         document.body.appendChild(modal);

         // Add event listener to close button
         const closeBtn = modal.querySelector('.youtube-modal-close');
         closeBtn.addEventListener('click', closeYouTubeModal);

         // Close modal when clicking outside the content
         modal.addEventListener('click', function(event) {
             if (event.target === modal) {
                 closeYouTubeModal();
             }
         });

         // Close modal with escape key
         document.addEventListener('keydown', function(event) {
             if (event.key === 'Escape' && modal.style.display === 'flex') {
                 closeYouTubeModal();
             }
         });
     }

     // Find YouTube links with specific patterns
     const youtubeLinks = document.querySelectorAll('a[href*="youtube.com/watch"], a[href*="youtu.be/"]');

     youtubeLinks.forEach(link => {
         link.addEventListener('click', openYouTubeModal);
     });
 }

 function openYouTubeModal(event) {
     event.preventDefault();

     const url = new URL(this.href);
     let videoId;

     // Extract video ID from different YouTube URL formats
     if (url.hostname.includes('youtube.com')) {
         videoId = url.searchParams.get('v');
     } else if (url.hostname.includes('youtu.be')) {
         videoId = url.pathname.substring(1);
     }

     if (videoId) {
         const iframe = document.getElementById('youtube-iframe');
         iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

         const modal = document.getElementById('youtube-modal');
         modal.style.display = 'flex';

         // Add class to body to prevent scrolling
         document.body.classList.add('youtube-modal-open');
     }
 }

 function closeYouTubeModal() {
     const modal = document.getElementById('youtube-modal');
     if (modal) {
         modal.style.display = 'none';

         // Reset iframe src to stop video playback
         const iframe = document.getElementById('youtube-iframe');
         iframe.src = '';

         // Remove class from body to re-enable scrolling
         document.body.classList.remove('youtube-modal-open');
     }
 }

 ////////// Price Toggle //////////
 function initPriceToggle() {
     const toggle = document.querySelector('.membership-toggle');
     if (!toggle) return;

     const toggleButtons = document.querySelectorAll('.toggle button');
     const yearlyElements = document.querySelectorAll('[data-yearly]');
     const monthlyElements = document.querySelectorAll('[data-monthly]');

     toggleButtons.forEach(button => {
         // Add ARIA attributes
         button.setAttribute('role', 'switch');
         button.setAttribute(ARIA_ATTRS.CHECKED, 'false');

         button.addEventListener('click', () => {
             const priceType = button.getAttribute('data-price');
             if (!['yearly', 'monthly'].includes(priceType)) return;

             // Update ARIA states
             toggleButtons.forEach(btn => {
                 btn.classList.remove('active');
                 btn.setAttribute(ARIA_ATTRS.CHECKED, 'false');
             });
             button.classList.add('active');
             button.setAttribute(ARIA_ATTRS.CHECKED, 'true');

             toggle.setAttribute('data-active-price', priceType);

             const isYearly = priceType === 'yearly';
             yearlyElements.forEach(el => {
                 el.style.display = isYearly ? 'block' : 'none';
                 el.setAttribute(ARIA_ATTRS.HIDDEN, (!isYearly).toString());
             });
             monthlyElements.forEach(el => {
                 el.style.display = isYearly ? 'none' : 'block';
                 el.setAttribute(ARIA_ATTRS.HIDDEN, isYearly.toString());
             });
         });

         // Add keyboard support
         button.addEventListener('keydown', (e) => {
             if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
                 e.preventDefault();
                 button.click();
             }
         });
     });
 }

 /**
  * Comments Panel Functionality
  * Handles the sliding panel for comments
  */
 function initCommentsPanel() {
     const commentsTrigger = document.querySelector('.related-trigger');
     const commentsPanel = document.getElementById('comments-panel');
     const overlay = document.querySelector('.panel-overlay');
     const closeButton = document.querySelector('.close-panel');

     if (!commentsTrigger || !commentsPanel || !overlay || !closeButton) return;

     function toggleCommentsPanel() {
         const isExpanded = commentsPanel.classList.contains('active');

         // Toggle classes
         commentsPanel.classList.toggle('active');
         overlay.classList.toggle('active');

         // Update ARIA attributes
         commentsTrigger.setAttribute('aria-expanded', !isExpanded);
         commentsPanel.setAttribute('aria-hidden', isExpanded);

         // Control body scrolling
         document.body.style.overflow = isExpanded ? '' : 'hidden';

         // Focus management
         if (!isExpanded) {
             closeButton.focus();
         }
     }

     function closeCommentsPanel() {
         commentsPanel.classList.remove('active');
         overlay.classList.remove('active');
         commentsTrigger.setAttribute('aria-expanded', 'false');
         commentsPanel.setAttribute('aria-hidden', 'true');
         document.body.style.overflow = '';
         commentsTrigger.focus();
     }

     // Event listeners
     commentsTrigger.addEventListener('click', toggleCommentsPanel);
     closeButton.addEventListener('click', closeCommentsPanel);
     overlay.addEventListener('click', closeCommentsPanel);

     // Close panel on escape key
     document.addEventListener('keydown', function(event) {
         if (event.key === 'Escape' && commentsPanel.classList.contains('active')) {
             closeCommentsPanel();
         }
     });

     // Fix aria-controls attribute to match panel ID
     commentsTrigger.setAttribute('aria-controls', 'comments-panel');
 }

function initWikipediaIconsForCitations() {
     // Find all quotes with citations
     const quotes = document.querySelectorAll('.quote blockquote');

     quotes.forEach(quote => {
         const cite = quote.querySelector('cite');
         if (!cite) return;

         const links = cite.querySelectorAll('a');

         links.forEach(link => {
             // Check if the link is to Wikipedia
             if (link.href && link.href.includes('wikipedia.org')) {
                 // Create a Wikipedia icon
                 const wikiIcon = document.createElement('span');
                 wikiIcon.className = 'wiki-icon';
                 wikiIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wikipedia" viewBox="0 0 16 16"><path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288q0 .12-.133.12c-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946q.152-.42-.044-.595c-.132-.114-.224-.18-.563-.195l-.275-.014a.16.16 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29q0 .117-.133.117-.65.03-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224 224 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759q-.18-.15-.746-.18Q0 3.421 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288q0 .119-.15.118l-.375.016q-.483.02-.483.288-.002.125.109.4c.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303q0 .104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.16.16 0 0 1-.096-.034.1.1 0 0 1-.045-.085v-.288l.041-.03Z"/></svg>';

                 // Add some spacing between the link and the icon
                 const spacer = document.createTextNode(' ');

                 // Insert after the link
                 link.parentNode.insertBefore(spacer, link.nextSibling);
                 link.parentNode.insertBefore(wikiIcon, link.nextSibling.nextSibling);
             }
         });
     });
 }

 // Then add the new function below all your other initialization functions
 function initNewsletterModal() {
     // Newsletter modal functionality
     const modal = document.getElementById('newsletter-modal');
     const btn = document.getElementById('open-newsletter-modal');
     const closeBtn = document.querySelector('.close-newsletter');

     if (!modal || !btn || !closeBtn) return;

     btn.addEventListener('click', function() {
         modal.style.display = 'flex';
     });

     closeBtn.addEventListener('click', function() {
         modal.style.display = 'none';
     });

     window.addEventListener('click', function(event) {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });

     // Add escape key to close modal
     document.addEventListener('keydown', function(event) {
         if (event.key === 'Escape' && modal.style.display === 'flex') {
             modal.style.display = 'none';
         }
     });
 }

/**
  * Initialize breadcrumb dropdown functionality
  * Adds accessibility enhancements for the hover-based dropdown
  */
 function initBreadcrumbDropdown() {
     const pagesDropdown = document.querySelector('.pages-dropdown');
     if (!pagesDropdown) return;

     const dropdownTrigger = pagesDropdown.querySelector('.dropdown-trigger');
     if (!dropdownTrigger) return;

     // Add keyboard support
     dropdownTrigger.addEventListener('keydown', (e) => {
         if (e.key === 'Enter' || e.key === ' ') {
             e.preventDefault();

             // Simulate hover state by adding a temporary class
             pagesDropdown.classList.add('keyboard-hover');

             // Focus the first item in the dropdown
             const firstLink = pagesDropdown.querySelector('.breadcrumb-dropdown ul li a');
             if (firstLink) {
                 firstLink.focus();
             }
         }
     });

     // Add keyboard navigation within the dropdown
     const dropdownLinks = pagesDropdown.querySelectorAll('.breadcrumb-dropdown ul li a');
     dropdownLinks.forEach((link, index) => {
         link.addEventListener('keydown', (e) => {
             // Close dropdown on Escape
             if (e.key === 'Escape') {
                 e.preventDefault();
                 pagesDropdown.classList.remove('keyboard-hover');
                 dropdownTrigger.focus();
             }

             // Navigate with arrow keys
             if (e.key === 'ArrowDown' && index < dropdownLinks.length - 1) {
                 e.preventDefault();
                 dropdownLinks[index + 1].focus();
             }

             if (e.key === 'ArrowUp') {
                 e.preventDefault();
                 if (index > 0) {
                     dropdownLinks[index - 1].focus();
                 } else {
                     dropdownTrigger.focus();
                     pagesDropdown.classList.remove('keyboard-hover');
                 }
             }
         });

         // Remove keyboard-hover class when a link is clicked
         link.addEventListener('click', () => {
             pagesDropdown.classList.remove('keyboard-hover');
         });
     });

     // Close the dropdown when tabbing out of it
     const lastLink = dropdownLinks[dropdownLinks.length - 1];
     if (lastLink) {
         lastLink.addEventListener('keydown', (e) => {
             if (e.key === 'Tab' && !e.shiftKey) {
                 pagesDropdown.classList.remove('keyboard-hover');
             }
         });
     }

     // Make the dropdown accessible
     dropdownTrigger.setAttribute('role', 'button');
     dropdownTrigger.setAttribute('aria-haspopup', 'true');
     dropdownTrigger.setAttribute('aria-expanded', 'false');

     // Add CSS for keyboard hover simulation
     const style = document.createElement('style');
     style.textContent = `
         .pages-dropdown.keyboard-hover .breadcrumb-dropdown {
             visibility: visible;
             opacity: 1;
             transform: translateY(0);
             pointer-events: auto;
         }
         .pages-dropdown.keyboard-hover .dropdown-trigger:after {
             transform: rotate(180deg);
         }
     `;
     document.head.appendChild(style);
 }


/**
 * Utility: Safely get value from localStorage
 */
function safeLocalStorageGet(key, defaultValue = null) {
    try {
        if (window.localStorage) {
            const value = localStorage.getItem(key);
            return value !== null ? value : defaultValue;
        }
    } catch (e) {
        console.log('localStorage not available');
    }
    return defaultValue;
}

/**
 * Utility: Safely set value in localStorage
 */
function safeLocalStorageSet(key, value) {
    try {
        if (window.localStorage) {
            localStorage.setItem(key, value);
            return true;
        }
    } catch (e) {
        console.log('localStorage not available');
    }
    return false;
}
