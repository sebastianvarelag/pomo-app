import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface modesPayload {
  payload: {
    mode: 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
    sessionLength: number;
  }
}

interface InitialState{
  mode: 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
  autoPomodoro: boolean;
  autoBreak: boolean;
  round: number;
  roundSessionInterval: number;
  longBreakInterval: number;
  totalTimeFocusSession: number;
  skip: boolean | null;
  modes: {
    [key: string]: {
      id: string;
      label: string;
      sessionLength: number;
    }
  }
}


const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    mode: 'POMODORO',
    autoPomodoro: false,
    autoBreak: false,
    round: 1,
    roundSessionInterval: 1,
    longBreakInterval: 2,
    totalTimeFocusSession: 0,
    skip: false,
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
  } as InitialState,
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
    },
    setSkip: (state, action: PayloadAction<boolean | null>) =>{
      state.skip = action.payload;
    }
  }
});

export const {
  incrementRound,
  incrementTotalRoundSessionInterval,
  resetRoundSessionInterval,
  setLongBreakInterval,
  setMode,
  setSkip,
  setTotalTimeFocusSession,
  toggleAutoBreak,
  toggleAutoPomo,
  updateTimeMode,
} = timerSlice.actions;

export default timerSlice.reducer