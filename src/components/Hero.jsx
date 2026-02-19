import styles from './Hero.module.css';
import MasonryBackground from './MasonryBackground';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero}>
            <MasonryBackground />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi! I'm <span className={styles.highlight}>Matthew,</span> <span style={{ color: 'black' }}>A</span><br />
                    <span className={styles.highlight}>Senior Graphic Designer</span>
                </h1>
                <p className={styles.subtitle}>
                    A detail-oriented Graphic Designer and 3D artist with strong communication and project management skills. Committed to enhancing a company's design capabilities with my innovative problem-solving abilities and efficient delivery of impactful graphic solutions.
                </p>
                <div className={styles.categoryButtons}>
                    <button onClick={() => scrollToSection('digital-section')} className={styles.categoryBtn}>
                        DIGITAL MARKETING
                    </button>
                    <button onClick={() => scrollToSection('packaging-section')} className={styles.categoryBtn}>
                        PACKAGING DESIGN
                    </button>
                    <button onClick={() => scrollToSection('3d-section')} className={styles.categoryBtn}>
                        3D VISUALIZATION
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
