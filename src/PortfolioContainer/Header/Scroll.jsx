import { useState, useEffect } from "react";

export const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const [scrollDirection, setScrollDirection] = useState();

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDirection,
  };
};
