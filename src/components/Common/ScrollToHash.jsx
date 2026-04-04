

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element && window.lenis) {
        window.lenis.scrollTo(element, {
          offset: 0,
          duration: 1,
          easing: (t) => 1 - Math.pow(1 - t, 3), 
        });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;