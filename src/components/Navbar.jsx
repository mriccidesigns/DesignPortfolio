import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { SiLinkedin, SiArtstation, SiInstagram } from "react-icons/si";
import logo from '../assets/mr-logo.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const location = useLocation();
    const isHomeActive = location.pathname === '/';
    const isWorkActive = location.pathname.startsWith('/project') ||
        location.pathname === '/3d-projects' ||
        location.pathname === '/packaging' ||
        location.pathname === '/digital-marketing';

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <img src={logo} alt="Matthew Ricci Logo" className={styles.brandLogo} />
                    {/* Matthew Ricci */}
                </Link>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link to="/" className={isHomeActive ? styles.activeLink : styles.link} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/" className={isWorkActive ? styles.activeLink : styles.link} onClick={closeMenu}>
                        Work
                    </Link>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>
                        About
                    </NavLink>
                    <a href="/Matthew Ricci Resume-2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.link} onClick={closeMenu}>
                        Resume
                    </a>

                    <div className={styles.divider}></div>

                    <a href="https://www.linkedin.com/in/matthew-ricci10/" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={closeMenu} title="LinkedIn">
                        <SiLinkedin size={20} className={styles.socialIcon} />
                    </a>
                    <a href="https://www.artstation.com/matt_ricci_designs" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={closeMenu} title="ArtStation">
                        <SiArtstation size={20} className={styles.socialIcon} />
                    </a>
                    <a href="https://www.instagram.com/mattriccidesigns?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={closeMenu} title="Instagram">
                        <SiInstagram size={20} className={styles.socialIcon} />
                    </a>
                </div>

                <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                    <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
