import React, { useRef, useEffect, useState } from 'react';
import styles from './ScrollPeel.module.css';

const ScrollPeel = ({ images, altText }) => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate progress from 0 to 1 based on container's position in viewport
            // Start peeling when the top of the container hits its sticky position (around 15vh)
            const stickyOffset = viewportHeight * 0.15;
            const scrollableDistance = height - viewportHeight;

            let progress = -(top - stickyOffset) / scrollableDistance;

            // Clamp between 0 and 1
            progress = Math.max(0, Math.min(1, progress));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // init
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!images || images.length === 0) return null;

    return (
        <div
            className={styles.scrollWrapper}
            ref={containerRef}
            style={{ height: `${images.length * 90}vh` }}
        >
            <div className={styles.stickyContainer}>
                {images.map((src, index) => {
                    const transitionDuration = 1 / Math.max(1, (images.length - 1));
                    const startProgress = index * transitionDuration;
                    const endProgress = startProgress + transitionDuration;

                    let clipPercentage = 0;
                    if (index < images.length - 1) {
                        if (scrollProgress >= endProgress) {
                            clipPercentage = 100;
                        } else if (scrollProgress > startProgress) {
                            // cubic-bezier easing for smoother peel
                            const t = (scrollProgress - startProgress) / transitionDuration;
                            const easeInOutCubic = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                            clipPercentage = t * 100; // linear looks more like direct 1:1 scroll peeling
                        }
                    }

                    return (
                        <div
                            key={index}
                            className={styles.imageLayer}
                            style={{
                                zIndex: images.length - index,
                                clipPath: `inset(${clipPercentage}% 0 0 0)`
                            }}
                        >
                            <img src={src} alt={`${altText} ${index + 1}`} className={styles.peelImage} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollPeel;
