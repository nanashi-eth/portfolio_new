import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

// Importa tu componente de cabecera o reemplázalo con el JSX correspondiente
import SectionHeader from "./SectionHeader";

// Estilos
import "../../assets/variables.scss";
import "./loader.css";
import "./animations.js"

const Preloader: React.FC = () => {
  const [loadingText] = useState([
    "Generando Nodos",
    "Retocando Imágenes",
    "Bebiendo Café",
    "Finalizando Procesos",
  ]);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const loadingBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const imageLoad = imagesLoaded(images);
    const progressBar = loadingBarRef.current;
    const counter = counterRef.current;

    let loadedCount = 0;
    let loadingProgress = 0;

    // Timeline para animaciones
    const loadingTl = gsap.timeline({
      paused: false,
      onUpdate: () => countPercent(counter, loadingTl),
      onComplete: loadComplete,
    });

    loadingTl.to(progressBar, { width: "100%", duration: 2, ease: "power2.inOut" });

    // Listener de progreso de carga
    imageLoad.on("progress", () => {
      loadedCount++;
      loadingProgress = loadedCount / images.length;
      gsap.to(loadingTl, { progress: loadingProgress, duration: 0.5 });
    });

    function countPercent(counter: HTMLSpanElement | null, timeline: gsap.core.Timeline) {
      if (counter) {
        const newPercent = (timeline.progress() * 100).toFixed();
        counter.textContent = `${newPercent}%`;
      }
    }

    function loadComplete() {
      console.log("Carga completa");
      // Aquí puedes añadir acciones adicionales cuando la carga termine
    }
  }, []);

  return (
    <>
      <section className="preloader-section">
        <SectionHeader text="Cargando" />
        {/* <SectionHeader orientation="vertical" text="Loading" /> */}
        <div className="container">
          <div className="loader-container">
            <div className="text">
              <p>Preparándolo todo...</p>
            </div>
            <div className="loader">
              <div id="loading-bar" ref={loadingBarRef}></div>
            </div>
            <span id="counter" ref={counterRef}>0%</span>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
};

export default Preloader;
