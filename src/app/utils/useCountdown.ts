import { useCallback, useEffect, useRef, useState } from "react";

export default function useCountdown(minutes : number){
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
      clear();
    }
  }, [timeLeft])
  
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

  const start = useCallback(() =>{
    setTicking(true);
    setProgress(0); // Reset progress every start
  }, [])

  return{
    timeLeft,
    progress: progress / time,
    ticking,
    start,
  }
}