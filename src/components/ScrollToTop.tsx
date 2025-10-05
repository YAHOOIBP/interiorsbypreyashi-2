import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top for better UX
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Change to 'instant' for no animation
    });

    // Alternative: Using setTimeout for immediate effect
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;