"use client";

import { MouseEvent, useEffect, useState } from "react"

export const Header = () => {

  const [dimension, setDimension] = useState({
    width: 0, left: 0
  })
 
  useEffect(() => {
    window.addEventListener('resize', getDimension)
 
    return () => window.removeEventListener('resize', getDimension)
  }, [])

  const getDimension = () =>{
    const {offsetWidth, offsetLeft} = document.querySelector("button.active") as HTMLButtonElement
    setDimension({
      width: offsetWidth,
      left: offsetLeft
    })
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>{
    const {offsetWidth, offsetLeft} = event.target as HTMLButtonElement
    setDimension({
      width: offsetWidth,
      left: offsetLeft
    })
  }

  useEffect(() => {
    getDimension()
  }, [])

  return (
    <header>
      <nav className="flex flex-col items-center w-full min-w-fit h-20">
        <ul className="flex justify-center items-center text-md md:text-xl bg-foreground relative">
          <li>
            <button 
              className="w-full h-20 px-6 md:px-8 opacity-75 border-b-4 border-transparent transition-all delay-100 hover:border-b-4 hover:border-white/40 active"
              onClick={handleClick}
              >
              Pomodoro
            </button>
          </li>
          <li>
            <button 
              className="w-full h-20 px-6 md:px-8 opacity-75 border-b-4 border-transparent transition-all delay-100 hover:border-b-4 hover:border-white/40"
              onClick={handleClick}
            >
              Short Break
            </button>
          </li>
          <li>
          <button 
              className="w-full h-20 px-6 md:px-8 opacity-75 border-b-4 border-transparent transition-all delay-100 hover:border-b-4 hover:border-white/40"
              onClick={handleClick}
              >
              Long Break
            </button>
          </li>
          <span className="animation" style={{width: dimension.width, left: dimension.left}}></span>
        </ul>
      </nav>
    </header>
  )
}
