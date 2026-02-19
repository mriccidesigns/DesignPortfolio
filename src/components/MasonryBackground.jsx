import { useEffect, useRef } from 'react';
import { masonryAssets } from '../data/projects';
import styles from './MasonryBackground.module.css';

const MasonryBackground = () => {
    const trackRefs = useRef([]);

    // Distribute assets across 4 rows
    const distributeToRows = (assets, numRows = 4) => {
        const rows = Array.from({ length: numRows }, () => []);
        assets.forEach((asset, index) => {
            rows[index % numRows].push(asset);
        });
        return rows;
    };

    const rows = distributeToRows(masonryAssets);

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
