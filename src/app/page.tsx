"use client";

import { useAppSelector } from "@/redux/hooks";
import { Timer } from "./components/Timer";
import clsx from "clsx";

export default function Home() {
  
  const { mode } = useAppSelector(state => state.timer)

    const containerClasses = clsx("w-screen h-screen mx-auto my-auto", {
    "bg-backgroundPomo": mode === "POMODORO",
    "bg-backgroundShort": mode === "SHORT_BREAK",
    "bg-backgroundLong": mode === "LONG_BREAK",
  })
  return (
    <>
      <div className={containerClasses}>
        <main className="w-full h-full">
          <Timer/>
        </main>
      </div>
    </>
  );
}
