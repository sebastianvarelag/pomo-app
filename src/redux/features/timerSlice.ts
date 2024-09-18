import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface modesPayload {
  payload: {
    mode: 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
    sessionLength: number;
  }
}

const initialState = {
  mode: 'POMODORO',
  autoPomodoro: false,
  autoBreak: false,
  round: 1,
  roundSessionInterval: 1,
  longBreakInterval: 2,
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
    updateTimeMode: (state, {payload}: PayloadAction<modesPayload>) => {
      const { mode, sessionLength } = payload.payload;
      state.modes[mode].sessionLength = sessionLength;
    },
    incrementRound: (state) =>{
      state.round += 1;
    },
    incrementTotalRoundSessionInterval: (state) => {
      state.roundSessionInterval += 1;
    },
    resetRoundSessionInterval: (state) => {
      state.roundSessionInterval = 1;
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
  setLongBreakInterval,
  setMode,
  incrementRound,
  incrementTotalRoundSessionInterval,
  resetRoundSessionInterval,
  setTotalTimeFocusSession,
  toggleAutoBreak,
  toggleAutoPomo,
  updateTimeMode,
} = timerSlice.actions;

export default timerSlice.reducer