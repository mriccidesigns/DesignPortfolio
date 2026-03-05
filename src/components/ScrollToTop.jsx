import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    // Track scroll position on the home page
    useEffect(() => {
        const handleScroll = () => {
            if (pathname === '/') {
                sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    useEffect(() => {
        // Only trigger scroll adjustments when routing to a new page
        if (prevPathname.current !== pathname) {

            // Check if we are returning to the Home page from a Project Detail page
            const isGoingHome = pathname === '/';
            const isComingFromProject = prevPathname.current.startsWith('/project/');

            if (isGoingHome && isComingFromProject) {
                // Try to restore previous scroll position
                const savedScroll = sessionStorage.getItem('homeScrollPosition');
                if (savedScroll !== null) {
                    // Small timeout ensures the DOM has painted the Home page layout before scrolling
                    setTimeout(() => {
                        window.scrollTo(0, parseInt(savedScroll, 10));
                    }, 50);
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                // Default behavior: reset scroll to top for all other navigation
                window.scrollTo(0, 0);
            }

            prevPathname.current = pathname;
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
