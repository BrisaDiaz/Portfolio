import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useWindowScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: window.scrollX,
    y: window.scrollY,
  });

  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // La dependencia vacía garantiza que el efecto se ejecute solo una vez al montar el componente

  return scrollPosition;
};

export default useWindowScroll;
