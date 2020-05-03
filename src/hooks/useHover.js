import { useState, useEffect, useRef } from "react";

function useHover() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", onEnter);
    ref.current.addEventListener("mouseleave", onLeave);

    return () => {
      ref.current.removeEventListener("mouseenter", onEnter);
      ref.current.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function onEnter() {
    setHovered(true);
  }

  function onLeave() {
    setHovered(false);
  }

  return [hovered, ref];
}

export default useHover;
