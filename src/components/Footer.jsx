import { SiLinkedin, SiInstagram, SiArtstation } from "react-icons/si";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Matthew Ricci. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/matthew-ricci10/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">
                        <SiLinkedin />
                    </a>
                    <a href="https://www.instagram.com/mattriccidesigns?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">
                        <SiInstagram />
                    </a>
                    <a href="https://www.artstation.com/matt_ricci_designs" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="ArtStation">
                        <SiArtstation />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
