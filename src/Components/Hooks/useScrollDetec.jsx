import React, { useEffect, useState, useRef } from "react";
import ScrollDetection from "../ScrollDetection/ScrollDetection";
const useScrollDetec = () => {
  const [scroll, setScroll] = useState("");
  const prevScroll = useRef(window.scrollY);
  useEffect(() => {
    const handleDirection = () => {
      if (prevScroll.current > window.scrollY) {
        setScroll("UP");
      } else {
        setScroll("DOWN");
      }

      prevScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleDirection);

    return () => {
      window.removeEventListener("scroll", handleDirection);
    };
  }, []);

  return scroll;
};

export default useScrollDetec;
