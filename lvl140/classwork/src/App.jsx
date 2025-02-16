import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
export default function App() {
  const boxRef = useRef(null)
  const textRef = useRef(null)
  const tl = gsap.timeline()

  useEffect(() =>{ 
    // !scene 1
    tl.set(boxRef.current,{
      duration: 1,
      x: "50vw",
      xPercent: -50,
      // yoyo: true,
      
      ease: "power5.inOut"
    })
    // ! scene 2
    tl.set(boxRef.current,{
      
        yPercent: true,
        rotate: 360,
        duration: 1,
      })
    // ! scene 3
    tl.set(boxRef.current,{
      width:"100vw",
      height:"100vh",
      duration: .2,
    })
    // ! scene 4
    tl.to(textRef.current,{
      opacity: 1,
      duration: 2,
      repeat: 0
    })
  },[])
  return (
    <>
    <div ref={boxRef} className='bg-black size-50'>
    </div>
    <div className=' absolute h-screen top-0 left-0 w-full flex justify-center item-center'>
      <h1 ref={textRef} className=' opacity-[0] text-lg text-white text-center translate-y-[50%]'>Group 6</h1>
    </div>
    </>
  )
}
