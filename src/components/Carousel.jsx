import { useState } from 'react';
import styles from './Carousel.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ item, projectTitle, index }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + item.length) % item.length);
    };

    if (!item || item.length === 0) return null;

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.imageContainer}>
                <div
                    className={styles.track}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {item.map((src, idx) => (
                        <div key={idx} className={styles.slide}>
                            <img
                                src={src}
                                alt={`${projectTitle} carousel ${index}-${idx}`}
                                className={styles.carouselImage}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {item.length > 1 && (
                <>
                    <button onClick={prevSlide} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous Slide">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextSlide} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next Slide">
                        <FaChevronRight />
                    </button>

                    <div className={styles.indicators}>
                        {item.map((_, idx) => (
                            <span
                                key={idx}
                                className={`${styles.indicator} ${idx === currentIndex ? styles.active : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
