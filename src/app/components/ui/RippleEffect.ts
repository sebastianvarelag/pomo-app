import { MouseEvent, RefObject } from "react";

interface props{
  buttonRef: RefObject<HTMLButtonElement>;
  rippleRef: RefObject<HTMLSpanElement>;
  event: MouseEvent<HTMLButtonElement>
}

const RippleEffect = ({buttonRef, rippleRef, event}: props) => {
  
  const button = buttonRef?.current;
  const ripple = rippleRef?.current;

  if(button){
    const {offsetTop, offsetLeft} = button;
    
    const leftPos = event.clientX - offsetLeft;
    const topPos = event.clientY - offsetTop;

    if(ripple){
      ripple.style.left = leftPos + "px";
      ripple.style.top = topPos + "px";
      return true;
    }
  }
}

export {RippleEffect as rippleEff}
