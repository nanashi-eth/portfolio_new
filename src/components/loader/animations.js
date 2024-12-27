import gsap from "gsap";

export function loadComplete() {

  const loadCompleteTl = gsap.timeline();
  loadCompleteTl
    .to(".preloader-section", {
      y: "-100%",
      delay: 0.5,
    })
    .to(
      "section:nth-child(2)",
      {
        y: "-100%",
        delay: 0.6,
      },
      0
    )
    .to(
      "section:nth-child(3)",
      {
        y: "-100%",
        delay: 0.7,
      },
      0
    )
    .to(
      ".hero-section .text-content *",
      {
        transform: "translateY(0%)",
        opacity: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "Power3.easeOut",
      },
      0
    )
    .to(
      ".scroller",
      {
        x: "auto",
        delay: 1,
        duration: 1,
        ease: "Power3.easeOut",
      },
      0
    )
    .to(
      ".about-section .section-header",
      {
        x: "auto",
        delay: 1,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      0
    );
}
