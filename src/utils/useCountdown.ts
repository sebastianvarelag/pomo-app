import { useCallback, useEffect, useRef, useState } from "react";

type props = {
  minutes: number;
  onInit?: () => void;
  onStop?: () => void;
  onFinish?: () => void;
}

export default function useCountdown({minutes, onInit, onStop, onFinish} : props){
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const time = minutes * 60;
  const [timeLeft, setTimeLeft] = useState(time);
  const [ticking, setTicking] = useState(false);
  const [progress, setProgress] = useState(0);

  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const tick = useCallback(() =>{
    if (timeLeft > 0){
      setTimeLeft(timeLeft - 1);
      setProgress((count) => count + 1); // Sum every second
    }
    if(timeLeft <= 1){
      setTicking(false);
      setProgress(0);
      onFinish?.();
      clear();
    }
  }, [timeLeft, onFinish])
  
  useEffect(() =>{
    if(ticking){
      intervalRef.current = setInterval(tick, 1000);
    }else{
      clear();
    }
    return clear;
  }, [tick, ticking]);

  useEffect(() =>{
    setTimeLeft(time);
  }, [time]);

  const startTicking = useCallback(() =>{
    setTicking(true);
    onInit?.();
  }, [onInit])
  
  const stopTicking = useCallback(() =>{
    setTicking(false);
    onStop?.();
  }, [onStop])

  const resetTicking = useCallback(() =>{
    setTicking(false);
    setProgress(0);
    setTimeLeft(time);
    clear();
  }, [time])

  return{
    timeLeft,
    progress: progress / time,
    ticking,
    startTicking,
    stopTicking,
    resetTicking,
  }
}