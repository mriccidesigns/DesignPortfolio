export const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    // Read the actual navbar height dynamically so we don't hardcode it
    const navbar = document.querySelector('nav') || document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight : 60;

    // Extra breathing room so the section title isn't flush against the navbar
    const offset = navbarHeight + 16;

    // Get position of the target relative to the document, minus the navbar offset
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;


    // Current scroll position
    const startPosition = window.scrollY;

    // Distance to scroll
    const distance = targetPosition - startPosition;

    // Scroll duration in ms (adjust this to make it faster/slower)
    const duration = 800;

    let start = null;

    // Easing function: easeInOutCubic
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = easeInOutCubic(progress);

        // Use auto behavior to avoid conflicting with CSS if it were there (though we removed it)
        window.scrollTo({
            top: startPosition + (distance * ease),
            behavior: 'auto'
        });

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};
