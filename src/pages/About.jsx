import styles from './About.module.css';
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobeaftereffects, SiAdobepremierepro, SiAdobelightroom, SiFigma } from "react-icons/si";

// Profile image from assets
import profileImage from '../assets/projects/Matt_Grad_Photo-9.jpg';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img src={profileImage} alt="Matthew Ricci" className={styles.profileImage} />
                    </div>
                </div>

                <div className={styles.contentColumn}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>About Me</h1>
                        <h2 className={styles.subtitle}>Senior Graphic Designer</h2>
                    </header>

                    <div className={styles.bio}>
                        <p>
                            I am a detail-oriented Senior In-House Graphic Designer and 3D artist with a proven track record of delivering impactful design solutions across diverse departments.
                            My approach combines technical precision with a deep understanding of corporate brand management and internal communications.
                        </p>
                        <p>
                            With years of experience working within corporate environments, I specialize in streamlining design workflows and maintaining absolute brand consistency while pushing the boundaries of visual storytelling.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills row - full width, centered, between bio and software mastery */}
            <div className={styles.skillsRow}>
                <div className={styles.skills}>
                    <div className={styles.skillItem}>
                        <div className={styles.skillNumber}>7+</div>
                        <div className={styles.skillText}>Years of Experience</div>
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillNumber}>3D</div>
                        <div className={styles.skillText}>Visualization Mastery</div>
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillNumber}>UI | UX</div>
                        <div className={styles.skillText}>UI/UX Design</div>
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillNumber}>★</div>
                        <div className={styles.skillText}>Project Management</div>
                    </div>
                </div>
            </div>

            {/* Software Mastery section - full width, centered */}
            <div className={styles.softwareSectionWrapper}>
                <div className={styles.softwareSection}>
                    <h3 className={styles.sectionHeader}>Software Mastery</h3>
                    <div className={styles.softwareGrid}>
                        {/* Row 1: Core Design & Layout (Adobe + Figma) */}
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe Photoshop">
                                <SiAdobephotoshop />
                            </div>
                            <span className={styles.softwareLabel}>Photoshop</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe Illustrator">
                                <SiAdobeillustrator />
                            </div>
                            <span className={styles.softwareLabel}>Illustrator</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe InDesign">
                                <SiAdobeindesign />
                            </div>
                            <span className={styles.softwareLabel}>InDesign</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Figma">
                                <SiFigma />
                            </div>
                            <span className={styles.softwareLabel}>Figma</span>
                        </div>

                        {/* Row 2: Video & 3D (Adobe + Blender) */}
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe After Effects">
                                <SiAdobeaftereffects />
                            </div>
                            <span className={styles.softwareLabel}>After Effects</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe Premiere Pro">
                                <SiAdobepremierepro />
                            </div>
                            <span className={styles.softwareLabel}>Premiere Pro</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Blender / 3ds Max">
                                <SiBlender />
                            </div>
                            <span className={styles.softwareLabel}>Blender</span>
                        </div>
                        <div className={styles.softwareIconWrapper}>
                            <div className={styles.softwareIcon} title="Adobe Lightroom">
                                <SiAdobelightroom />
                            </div>
                            <span className={styles.softwareLabel}>Lightroom</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
