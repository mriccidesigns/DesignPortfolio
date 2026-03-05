export const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    // Get position of the target relative to the document
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

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
