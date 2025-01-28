import gsap from "gsap";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    gsap.fromTo(
      "#box-1",
    {
    
    x: "0px",
    delay:"50",
    duration: '1200ms'
  },
  
  )
  })
}