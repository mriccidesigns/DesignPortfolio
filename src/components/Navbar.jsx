import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { SiLinkedin, SiArtstation, SiInstagram } from "react-icons/si";
import logo from '../assets/MR_Logo_2.png';
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

    const isHomeActive = location.pathname === '/' || location.pathname === '';
    const isWorkActive = location.pathname.startsWith('/project') ||
        location.pathname === '/3d-projects' ||
        location.pathname === '/packaging' ||
        location.pathname === '/digital-marketing';

    const handleWorkClick = (e) => {
        e.preventDefault();
        closeMenu();
        if (location.pathname === '/' || location.pathname === '') {
            // Already on home page, just scroll to the section
            const section = document.getElementById('3d-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page first, then scroll after navigation
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('3d-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo} onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <img src={logo} alt="Matthew Ricci Logo" className={styles.brandLogo} />
                </Link>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link to="/" className={isHomeActive ? styles.activeLink : styles.link} onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        Home
                    </Link>
                    <a href="#3d-section" className={isWorkActive ? styles.activeLink : styles.link} onClick={handleWorkClick}>
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
