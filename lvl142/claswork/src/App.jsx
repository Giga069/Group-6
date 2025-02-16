import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function App() {
  const containerRef = useRef(null);
  const blueBoxRef = useRef(null);
  const orangeBoxRef = useRef(null);
  const purpleBoxRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(orangeBoxRef.current, {
      scrollTrigger: {
        trigger: purpleBoxRef.current,
        toggleActions: "play none none reverse",
        pin: true,
        start: "top center",
        end: "center center",
      },
      scale: 0.3,
      rotation: 720,
      x: "30vw",
      xPercent: 50,
      // y: "20vw",
      // yPercent: 50,
      backgroundColor: "orange",
      ease: "power1.in",
      borderRadius: "20%",
    });
  }, []);

  return (
    <div ref={containerRef} className="">
      <div ref={blueBoxRef} className="size-56 bg-white text-white" />
      <div ref={orangeBoxRef} className="size-56 bg-green-600 text-white" />
      <div ref={purpleBoxRef} className="size-56 bg-white text-white" />
    </div>
  );
}
