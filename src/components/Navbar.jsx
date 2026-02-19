import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { SiLinkedin, SiArtstation, SiInstagram } from "react-icons/si";
import logo from '../assets/MR_Logo_4.png';
import resumePdf from '../assets/Matthew-Ricci-Resume-2026.pdf';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isHomeActive = location.pathname === '/' || location.pathname === '' || location.pathname === '/DesignPortfolio/' || location.pathname === '/DesignPortfolio';
    const isWorkActive = location.pathname.startsWith('/project') ||
        location.pathname === '/3d-projects' ||
        location.pathname === '/packaging' ||
        location.pathname === '/digital-marketing';

    const isHomePath = location.pathname === '/' || location.pathname === '' || location.pathname === '/DesignPortfolio/' || location.pathname === '/DesignPortfolio';

    const handleHomeClick = (e) => {
        e.preventDefault();
        closeMenu();
        if (isHomePath) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
        }
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        closeMenu();
        if (isHomePath) {
            const section = document.getElementById('3d-section');
            if (section) {
                const y = section.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('3d-section');
                if (section) {
                    const y = section.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <a href="#" className={styles.logo} onClick={handleHomeClick}>
                    <img src={logo} alt="Matthew Ricci Logo" className={styles.brandLogo} />
                </a>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <a href="#" className={isHomeActive ? styles.activeLink : styles.link} onClick={handleHomeClick}>
                        Home
                    </a>
                    <a href="#" className={isWorkActive ? styles.activeLink : styles.link} onClick={handleWorkClick}>
                        Work
                    </a>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={closeMenu}>
                        About
                    </NavLink>
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer" className={styles.link} onClick={closeMenu}>
                        RESUME
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
