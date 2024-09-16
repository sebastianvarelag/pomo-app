import { Controls } from "./Controls"
import { Menu } from "./Menu"

export const Timer = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center sm:gap-16 md:gap-36">
      <Menu/>
      <div className="flex justify-center items-center min-w-[500px] min-h-[500px] bg-white/10 scale-50 sm:scale-75 md:scale-100 border-8 border-white/30 rounded-full relative">
        <div className="text-9xl">
          <span className="select-none">25:00</span>
        </div>
          <svg className="absolute rotate-[270deg]" viewBox="0 0 90 90" height="600px" width="600px">
          <defs></defs>
          <circle className="delay-200 ease-linear" r="38.5" cx="45" cy="45" fill="none" stroke="white" strokeLinecap="round" strokeWidth={2} strokeOpacity={1} strokeDasharray={233} strokeDashoffset={200} transform="matrix(0.952228, 0, 0, 0.951022, 2.440749, 2.269741)"></circle>
        </svg>
      </div>
      <Controls/>
    </div>
  )
}
