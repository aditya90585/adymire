import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}

export default ScrollToTop