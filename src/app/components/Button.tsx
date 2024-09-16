"use client";

import { ButtonHTMLAttributes, MouseEvent, useRef, useState } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  backgroundColor?: string;
  paddingX?: string;
  height?: string;
  openModal?: () => void;
};

export const Button = ({children, backgroundColor, paddingX, height, openModal}: Props) => {
  
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  const [active, setActive] = useState(Boolean);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>{

    if(openModal){
      openModal();
    }

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
      className={`${height ? 'h-' + height : 'h-12'} ${backgroundColor ? 'bg-['+backgroundColor+']' : 'bg-white/15'} ${paddingX ? 'px-'+ paddingX : 'px-6'} hover:opacity-70 relative overflow-hidden`}
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
