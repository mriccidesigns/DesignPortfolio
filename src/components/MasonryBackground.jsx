import { useEffect, useRef, useMemo } from 'react';
import { masonryAssets, masonrySingleRowAsset } from '../data/projects';
import styles from './MasonryBackground.module.css';

const MasonryBackground = () => {
    const trackRefs = useRef([]);

    // Shuffle array with a seed for consistent but random-looking distribution
    const shuffleArray = (arr, seed = 42) => {
        const shuffled = [...arr];
        let s = seed;
        for (let i = shuffled.length - 1; i > 0; i--) {
            s = (s * 16807 + 0) % 2147483647;
            const j = s % (i + 1);
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Create 4 rows with uniquely shuffled copies of all assets
    // Triangle hallway only goes in row 2
    const rows = useMemo(() => {
        return [0, 1, 2, 3].map((rowIndex) => {
            const shuffled = shuffleArray(masonryAssets, 42 + rowIndex * 17);
            if (rowIndex === 1) {
                // Insert triangle hallway into the middle of row 2 only
                const mid = Math.floor(shuffled.length / 2);
                shuffled.splice(mid, 0, masonrySingleRowAsset);
            }
            return shuffled;
        });
    }, []);

    useEffect(() => {
        const speed = 0.25; // pixels per frame (slower for subtlety)
        const offsets = trackRefs.current.map(() => 0);
        let animationId;

        const animate = () => {
            trackRefs.current.forEach((track, i) => {
                if (!track) return;
                const totalWidth = track.scrollWidth / 3; // We triplicated content
                const direction = i % 2 === 0 ? -1 : 1; // Alternate directions

                offsets[i] += speed * direction;

                // Reset seamlessly when one-third has scrolled
                if (direction === -1 && offsets[i] <= -totalWidth) {
                    offsets[i] += totalWidth;
                } else if (direction === 1 && offsets[i] >= 0) {
                    offsets[i] -= totalWidth;
                }

                track.style.transform = `translate3d(${offsets[i]}px, 0, 0)`;
            });
            animationId = requestAnimationFrame(animate);
        };

        // Initialize LTR rows to start offset
        trackRefs.current.forEach((track, i) => {
            if (!track) return;
            if (i % 2 === 1) {
                const totalWidth = track.scrollWidth / 3;
                offsets[i] = -totalWidth;
            }
        });

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className={styles.masonryBackground}>
            {rows.map((rowAssets, rowIndex) => (
                <div key={rowIndex} className={styles.masonryRow}>
                    <div
                        className={styles.masonryTrack}
                        ref={(el) => (trackRefs.current[rowIndex] = el)}
                    >
                        {[...rowAssets, ...rowAssets, ...rowAssets].map((asset, assetIndex) => (
                            <div key={assetIndex} className={styles.masonryItem}>
                                {asset.type === 'video' ? (
                                    <video
                                        src={asset.src}
                                        className={styles.masonryMedia}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={asset.src}
                                        alt="Portfolio work"
                                        className={styles.masonryMedia}
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MasonryBackground;
