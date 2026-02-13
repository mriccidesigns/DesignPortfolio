import { masonryAssets } from '../data/projects';
import styles from './MasonryBackground.module.css';

const MasonryBackground = () => {
    // Distribute assets across 4 rows
    // Row 1 (index 0): scrolls right-to-left
    // Row 2 (index 1): scrolls left-to-right  
    // Row 3 (index 2): scrolls right-to-left
    // Row 4 (index 3): scrolls left-to-right
    const distributeToRows = (assets, numRows = 4) => {
        const rows = Array.from({ length: numRows }, () => []);
        assets.forEach((asset, index) => {
            rows[index % numRows].push(asset);
        });
        return rows;
    };

    const rows = distributeToRows(masonryAssets);

    return (
        <div className={styles.masonryBackground}>
            {rows.map((rowAssets, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`${styles.masonryRow} ${rowIndex % 2 === 0 ? styles.scrollRTL : styles.scrollLTR
                        }`}
                >
                    {/* Duplicate content for seamless infinite loop */}
                    <div className={styles.masonryTrack}>
                        {[...rowAssets, ...rowAssets].map((asset, assetIndex) => (
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
