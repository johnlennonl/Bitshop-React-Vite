// /components/ScrollToTop.js
import React, { useEffect, useState } from 'react';


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            id="scrollBtn"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
            className="scroll-to-top-btn"
        >
            &#8593;
        </button>
    );
};

export default ScrollToTop;
