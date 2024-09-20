"use client";

import { useAppSelector } from "@/redux/hooks";
import { Timer } from "./components/Timer";
import clsx from "clsx";

export default function Home() {
  
  const { mode } = useAppSelector(state => state.timer)

    const containerClasses = clsx("min-w-screen min-h-screen", {
    "bg-backgroundPomo": mode === "POMODORO",
    "bg-backgroundShort": mode === "SHORT_BREAK",
    "bg-backgroundLong": mode === "LONG_BREAK",
  })
  return (
    <>
      <main className={containerClasses}>
        <Timer/>
      </main>
    </>
  );
}
