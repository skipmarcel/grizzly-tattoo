"use client";
import { useEffect, useState } from "react";

const BacktoTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleArrow = () => {
      setShowArrow(window.scrollY > 300);
    };

    if (window) {
      handleArrow();

      window.addEventListener("scroll", handleArrow);

      return () => {
        window.removeEventListener("scroll", handleArrow);
      };
    }
  }, []);

  return (
    <>
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="18px"
          height="40px"
          viewBox="0 0 16.043 40.009"
          enable-background="new 0 0 16.043 40.009"
          xmlSpace="preserve"
          className="fixed bottom-3 right-3 w-10 h-10 rotate-90 p-2 bg-white  cursor-pointer rounded-full border-dashed border border-black text-black z-50 hover"
          onClick={handleToTop}
        >
          <polygon
            fill-rule="evenodd"
            clip-rule="evenodd"
            points="16.043,0 0,20.018 16.043,40.009 8.653,20.018 "
          ></polygon>
        </svg>
      )}
    </>
  );
};

export default BacktoTop;
