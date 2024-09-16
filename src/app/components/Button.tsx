"use client";

import { MouseEvent, useRef, useState } from "react";


type Props = {
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({children}) => {
  

  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  const [active, setActive] = useState(Boolean);
  

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>{
    const button = buttonRef.current;
    const ripple = rippleRef.current;

    if(button){
      const {offsetTop, offsetLeft} = button;
      
      const leftPos = event.clientX - offsetLeft;
      const topPos = event.clientY - offsetTop;

      if(ripple){
        ripple.style.left = leftPos + "px";
        ripple.style.top = topPos + "px";
        setActive(true)
        setTimeout(() => {
          setActive(false);
        }, 600);
      }
    }
  }
  
  return (
    <button 
      ref={buttonRef}
      className={`h-16 bg-white/15 px-6 hover:opacity-70 transition-opacity delay-200 relative overflow-hidden`}
      onClick={handleClick}
      >
      {children}
      <span 
        ref={rippleRef}
        className={`absolute bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-[50%]${active ? ' animate-rippleAnim' : ''}`}
        ></span>
    </button>
  )
}
