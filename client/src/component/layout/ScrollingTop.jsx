import React, { useEffect, useState } from "react";

const ScrollingTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ display: isVisible ? "block" : "none" }}
      onClick={handleScrollToTop}
      className="scrollTop"
    >
      <i className="bi bi-arrow-up"></i>
    </div>
  );
};

export default ScrollingTop;
