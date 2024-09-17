import { useAppSelector } from "@/redux/hooks"
import { Controls } from "./Controls"
import { Menu } from "./Menu"
import useCountdown from "../utils/useCountdown";
import { secondsToMinutes } from "../helpers/helpers";
import { useEffect } from "react";

export const Timer = () => {


  const { modes, mode, isRunning } = useAppSelector(state => state.timer);
  
  const { ticking, progress, timeLeft, start} = useCountdown(modes[mode as keyof typeof modes].sessionLength);
  
  useEffect(() => {
    if(isRunning){
      start();
    }
  }, [isRunning])
  
  const {minutesString, secondsString } = secondsToMinutes(timeLeft);

  return (
    <div className="flex flex-col justify-center w-full h-full items-center sm:gap-16 md:gap-36">
      <Menu/>
      <div className="flex justify-center items-center min-w-[500px] min-h-[500px] bg-white/10 scale-50 sm:scale-75 md:scale-100 border-8 border-white/30 rounded-full relative">
          <div className="flex justify-center items-center text-9xl select-none">
            <span className="w-[160px] text-center">{minutesString}</span>
            <span>:</span>
            <span className="w-[160px] text-center">{secondsString}</span>
          </div>
          <svg className="absolute rotate-[270deg]" viewBox="0 0 90 90" height="600px" width="600px">
          <defs></defs>
          <circle r="38.9" cx="45" cy="45" fill="none" stroke="white" strokeLinecap="round" strokeWidth={2} strokeOpacity={1} strokeDasharray={244.4} strokeDashoffset={244.4 - (244.4 * progress)} transform="matrix(0.952228, 0, 0, 0.951022, 2.440749, 2.269741)"></circle>
        </svg>
      </div>
      <Controls/>
    </div>
  )
}
