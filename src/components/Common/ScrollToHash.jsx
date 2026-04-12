

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element && window.lenis) {
        window.lenis.scrollTo(element, { immediate: true });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;