import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface modesPayload {
  payload: {
    mode: 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
    sessionLength: number;
  }
}

const initialState = {
  mode: 'POMODORO',
  isRunning: true,
  longBreakInterval: 4,
  autoPomodoro: false,
  autoBreak: false,
  totalTimeFocusSession: 0,
  modes: {
    "POMODORO":{
      id: "POMODORO",
      label: "Pomodoro",
      sessionLength: 1
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
    updateTimeMode: (state, {payload}: PayloadAction<modesPayload>) => {
      const { mode, sessionLength } = payload.payload;
      state.modes[mode].sessionLength = sessionLength;
    },
    toggleAutoPomo: (state) => {
      state.autoPomodoro = !state.autoPomodoro;
    },
    toggleAutoBreak: (state) => {
      state.autoBreak = !state.autoBreak;
    },
    setLongBreakInterval: (state, action: PayloadAction<number>) =>{
      state.longBreakInterval = action.payload;
    },
    setTotalTimeFocusSession: (state, action: PayloadAction<number>) =>{
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