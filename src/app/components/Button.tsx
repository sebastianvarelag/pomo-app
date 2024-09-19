"use client";

import { ButtonHTMLAttributes, MouseEvent, useRef, useState } from "react";
import { rippleEff } from "./ui/";
import { useAudioPlayer } from "@/utils/sound";
import { setSkip } from "@/redux/features/timerSlice";
import { useAppDispatch } from "@/redux/hooks";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  bgColor?: string;
  openModal?: () => void;
  toggleTime?: () => void;
  isConfirm?: boolean;
};


export const Button = ({children, openModal, toggleTime, isConfirm}: Props) => {
  
  const dispatch = useAppDispatch()

  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  const buttonSound = useAudioPlayer('/sounds/start.mp3');

  const [active, setActive] = useState(Boolean);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
  
    buttonSound.play();

    if(openModal){
      openModal();
    }
    
    if(toggleTime){
      toggleTime();
    }

    if(isConfirm){
      dispatch(setSkip(null));
    }

    const ripple = rippleEff({buttonRef, rippleRef, event});

    if(ripple){
      setActive(true)
      setTimeout(() => {
        setActive(false);
      }, 600);
    }
  }
  
  return (
    <button 
      ref={buttonRef}
      className={`h-16 bg-white/15 px-6 hover:opacity-70 relative overflow-hidden`}
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
