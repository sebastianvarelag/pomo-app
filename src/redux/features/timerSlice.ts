import { modes } from '@/app/enum';
import { createSlice } from '@reduxjs/toolkit'

interface modesPayload {
  payload: {
    mode: modes;
    sessionLength: number;
  }
}

const initialState = {
  mode: "POMODORO",
  isRunning: false,
  longBreakInterval: 4,
  autoPomodoro: false,
  autoBreak: false,
  totalTimeFocusSession: 0,
  modes: {
    "POMODORO":{
      id: "POMODORO",
      label: "Pomodoro",
      sessionLength: 25
    },
    "SHORT_BREAK":{
      id: "SHORT_BREAK",
      label: "Short Break",
      sessionLength: 5
    },
    "LONG_BREAK":{
      id: "LONG_BREAK",
      label: "Long Break",
      sessionLength: 15
    }
  }
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setMode: (state, {payload}) =>{
      state.mode = payload;
    },
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    updateTimeMode: (state, {payload}: modesPayload) =>{
      const {mode, sessionLength} = payload;
      state.modes[mode].sessionLength = sessionLength;
    },
    toggleAutoPomo: (state) => {
      state.autoPomodoro = !state.autoPomodoro;
    },
    toggleAutoBreak: (state) => {
      state.autoBreak = !state.autoBreak;
    },
    setLongBreakInterval: (state, action) =>{
      state.longBreakInterval = action.payload;
    },
    setTotalTimeFocusSession: (state, action) =>{
      state.totalTimeFocusSession += action.payload;
    }
  }
});

export const {
  setMode,
  toggleRunning,
  updateTimeMode,
  toggleAutoPomo,
  toggleAutoBreak,
  setLongBreakInterval,
  setTotalTimeFocusSession,
} = timerSlice.actions;

export default timerSlice.reducer