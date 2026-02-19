import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        // Only scroll to top when actually changing pages (not same-page nav)
        if (prevPathname.current !== pathname) {
            window.scrollTo(0, 0);
            prevPathname.current = pathname;
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
