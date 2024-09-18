import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Controls } from "./Controls"
import { Menu } from "./Menu"
import useCountdown from "../../utils/useCountdown";
import { secondsToMinutes } from "../../helpers/helpers";
import { useCallback } from "react";
import { incrementRound, incrementTotalRoundSessionInterval, resetRoundSessionInterval, setMode } from "@/redux/features/timerSlice";

export const Timer = () => {


  const { modes, mode, round, roundSessionInterval, longBreakInterval } = useAppSelector(state => state.timer);
  const dispatch = useAppDispatch();
  
  const minutesMode = modes[mode as keyof typeof modes].sessionLength

  const { ticking, progress, timeLeft, start, stop, reset} = useCountdown({
    minutes: minutesMode,
    onFinish: () => onFinishSessionMode(),
  });

  const {minutesString, secondsString } = secondsToMinutes(timeLeft);

  const onFinishSessionMode = () =>{
    nextMode();
    switch(mode){
      case "POMODORO":
        dispatch(incrementRound());
        break;
      case "SHORT_BREAK":
        dispatch(incrementTotalRoundSessionInterval())
        break;
      case "LONG_BREAK":
        dispatch(resetRoundSessionInterval());
        break;
    }
  }

  const toggleTime = useCallback(() =>{
    if(!ticking){
      start();
    } else {
      stop();
    }
  }, [ticking, start, stop])

  const jumpTo = useCallback((id:string) =>{
    reset();
    dispatch(setMode(id))
  }, [dispatch, reset]);

  const nextMode = useCallback((modeSelected?: string) =>{
    console.log(modeSelected);
    
    switch(mode){
      case "SHORT_BREAK":
      case "LONG_BREAK":
        if(modeSelected !== undefined){
          jumpTo(modeSelected)
        }else{
          jumpTo("POMODORO");
        }
        break;
      case "POMODORO":
        if(modeSelected !== undefined){
          jumpTo(modeSelected)
        }else{
          if(roundSessionInterval === longBreakInterval){
            jumpTo("LONG_BREAK");
          }else{
            jumpTo("SHORT_BREAK");
          }
        }
        break;
      default:
        alert('error')
        break;
    }
  }, [jumpTo, mode, longBreakInterval, roundSessionInterval])



  return (
    <div className="flex flex-col justify-center w-full h-full items-center">
      <Menu onChangeMode={nextMode}/>
      <div className="flex justify-center items-center min-w-[500px] min-h-[500px] bg-white/10 scale-50 sm:scale-75 md:scale-100 border-8 border-white/30 rounded-full relative sm:mb-16 md:mb-36">
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
      <span className="relative bottom-8 text-2xl font-semibold opacity-70">#{(mode === 'POMODORO') ? round : (round !== 1) ? (round - 1) : '1'}</span>
      <Controls ticking={ticking} toggleTime={toggleTime}/>
    </div>
  )
}
