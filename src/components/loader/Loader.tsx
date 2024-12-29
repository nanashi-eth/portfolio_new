import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./loader.css"; // Asegúrate de importar el CSS

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del preloader

  useEffect(() => {
    const unit = document.querySelector(".preloader__number--unit");
    const decimal = document.querySelector(".preloader__number--decimal");
    const hundred = document.querySelector(".preloader__number--hundred");

    // Animación con GSAP
    const animation = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        // Añade el desvanecimiento cuando la animación termine
        gsap.to(".preloader", {
          opacity: 0,
          duration: 1,
          onComplete: () => setIsVisible(false),
        });
      },
    });

    animation.to(unit, { y: "-=1000%", duration: 2 });
    animation.to(decimal, { y: "-=1000%", duration: 1.5 }, "<0.5");
    animation.to(hundred, { y: "-=100%", duration: 1.5 }, "<0.05");

    return () => {
      animation.kill(); // Limpia la animación al desmontar el componente
    };
  }, []);

  if (!isVisible) return null; // Si el preloader ya no es visible, no renderizarlo

  return (
    <div className="preloader">
      <div className="preloader__wrapper">
        <div className="preloader__counter">
          <div className="preloader__mask">
            <div className="preloader__number preloader__number--hundred">
              0 1 2 3 4 5 6 7 8 9
            </div>
          </div>
          <div className="preloader__mask">
            <div className="preloader__number preloader__number--decimal">
              0 1 2 3 4 5 6 7 8 9 0
            </div>
          </div>
          <div className="preloader__mask">
            <div className="preloader__number preloader__number--unit">
              0 1 2 3 4 5 6 7 8 9 0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;