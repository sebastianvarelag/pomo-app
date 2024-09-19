"use client";

import { ChangeEventHandler, MouseEvent, useRef, useState } from "react"
import { Switch } from "./Switch"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setLongBreakInterval, toggleAutoBreak, toggleAutoPomo, updateTimeMode } from "@/redux/features/timerSlice";

type formData = {
  pomodoroTime: number,
  shortBreakTime: number,
  longBreakTime: number,
  longBreakInterval: number,
  autoPomodoroCheck: boolean,
  autoBreakCheck: boolean,
}

type propsModal ={
  onClose: () => void,
}

export const ModalSettingsContent = ({onClose}: propsModal) => {
  const {modes, autoPomodoro, autoBreak, longBreakInterval} = useAppSelector(state => state.timer);
  const {POMODORO, SHORT_BREAK, LONG_BREAK} = modes;
  const dispatch = useAppDispatch();
  
  const [formData, setFormData] = useState({
    pomodoroTime: POMODORO.sessionLength,
    shortBreakTime: SHORT_BREAK.sessionLength,
    longBreakTime: LONG_BREAK.sessionLength,
    longBreakInterval: longBreakInterval,
    autoPomodoroCheck: autoPomodoro,
    autoBreakCheck: autoBreak,
  })

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({target})=>{
    let { name, value } = target;

    if(value.length <= 3){
      setFormData({
       ...formData,
        [name]: (value !== "") ? parseInt(value) : '',
      })
    }
  }

  const handleChangeCheck: ChangeEventHandler<HTMLInputElement> = ({target})=>{
    const { name } = target;
    setFormData({
     ...formData,
      [name]: target.checked,
    })
  }

  const validateForm = (formData: formData): boolean =>{
    const {pomodoroTime, shortBreakTime, longBreakTime, longBreakInterval} = formData;

    if(pomodoroTime <= 0 || shortBreakTime <= 0 || shortBreakTime <= 0 || longBreakInterval <= 0) return false;

    if(pomodoroTime > 999 || shortBreakTime > 999 || longBreakTime > 999 || longBreakInterval > 999) return false;
    
    return true;
  }

  const saveForm = (formData: formData) => {    
    Object.entries(modes).forEach(([mode, {sessionLength}]) => {
      if(mode === 'POMODORO' && sessionLength !== formData.pomodoroTime) dispatch(updateTimeMode({payload: {mode, sessionLength: formData.pomodoroTime}}))
      if(mode === 'SHORT_BREAK' && sessionLength !== formData.shortBreakTime) dispatch(updateTimeMode({payload: {mode, sessionLength: formData.shortBreakTime}}))
      if(mode === 'LONG_BREAK' && sessionLength !== formData.longBreakTime) dispatch(updateTimeMode({payload: {mode, sessionLength: formData.longBreakTime}}))
    });

    if(formData.autoPomodoroCheck !== autoPomodoro) dispatch(toggleAutoPomo());

    if(formData.autoBreakCheck !== autoBreak) dispatch(toggleAutoBreak());

    if(formData.longBreakInterval !== longBreakInterval) dispatch(setLongBreakInterval(formData.longBreakInterval));

    onClose();
  }

  const formIsValid = validateForm(formData);

  const handleClickOk = (event: MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();    
    saveForm(formData);
  }

 
  return (
    <div>
      <h2 className="text-xl pb-2 border-b-2 border-gray-300 mb-2">Timer (Minutes)</h2>
      <form>
        <div className="flex w-full gap-x-5">
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Pomodoro:</label>
            <input 
              type="number" 
              name="pomodoroTime" 
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2 font-semibold"
              onChange={handleChangeInput}
              value={formData.pomodoroTime}
              />
          </div>
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Short Break:</label>
            <input 
              type="number" 
              name="shortBreakTime" 
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2 font-semibold"
              onChange={handleChangeInput}
              value={formData.shortBreakTime}
              />
          </div>
          <div className="flex flex-col grow">
            <label className="text-gray-500 font-bold">Long Break</label>
            <input 
              type="number" 
              name="longBreakTime" 
              className="bg-gray-200 w-full h-[40px] focus:outline-none p-4 rounded-lg mt-2 font-semibold"
              onChange={handleChangeInput}
              value={formData.longBreakTime}
              />
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-5">
          <label className="text-gray-500 font-bold">Long Break Interval</label>
          <input 
            type="number" 
            name="longBreakInterval"  
            className="bg-gray-200 w-[80px] h-[40px] focus:outline-none p-4 rounded-lg mt-2 font-semibold"
            onChange={handleChangeInput}
            value={formData.longBreakInterval}
            />
        </div>
        <div className="flex w-full justify-between mt-5">
          <label className="text-gray-500 font-bold">Auto Start Pomodoros</label>
          <Switch name="autoPomodoroCheck" isChecked={formData.autoPomodoroCheck} onChange={handleChangeCheck}/>
        </div>
        <div className="flex w-full justify-between mt-5">
          <label className="text-gray-500 font-bold">Auto Start Breaks</label>
          <Switch name="autoBreakCheck" isChecked={formData.autoBreakCheck} onChange={handleChangeCheck}/>
        </div>
        <div className="flex justify-end border-t-2 border-gray-300 mt-4 pt-4 text-white font-bold">
          <button 
            className={`h-12 bg-[#dc4f4f] px-6 hover:opacity-70 relative overflow-hidden${!formIsValid ? ' disabled-button' : ''}`}
            onClick={handleClickOk}
            >
              OK
            </button>
        </div>
      </form>
    </div>
  )
}
