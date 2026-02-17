import {createAction, createReducer} from "@reduxjs/toolkit";


export const incrementAC = createAction<{
  maxValue: number
}>('counter/increment');
export const resetAC = createAction<{ startValue: number }>('counter/reset');
export const setCounterAC = createAction<{ startValue: number }>('counter/set')
export const setIsSetAC = createAction<{ isSet: boolean }>('counter/setIsSet')

export const setStartAC = createAction<{
  startValue: number
}>('counter/setStart')
export const setMaxAC = createAction<{ maxValue: number }>('counter/setMax')
export const setSettingsErrorAC = createAction<{
  settingsError: boolean
}>('counter/setSettingsError')

export const setStartErrorAC = createAction<{startError: boolean}>('counter/setStartError')
export const setMaxErrorAC = createAction<{maxError: boolean}>('counter/setMaxErrorError')


export const MAX_VALUE = 8;
export const START_VALUE = 0;

export type CounterStateType = {
  counter: number,
  isSet: boolean,
  startValue: number,
  maxValue: number,
  settingsError: boolean,
  startError: boolean,
  maxError: boolean,
}

const initialState: CounterStateType = {
  counter: START_VALUE,
  isSet: false,
  startValue: START_VALUE,
  maxValue: MAX_VALUE,
  settingsError: false,
  startError: false,
  maxError: false,
}

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementAC, (state, action) => {
      if (state.counter < action.payload.maxValue) {
        state.counter += 1
      }
    })
    .addCase(resetAC, (state, action) => {
      state.counter = action.payload.startValue
    })
    .addCase(setCounterAC, (state, action) => {
      state.counter = action.payload.startValue
      state.isSet = true
    })
    .addCase(setIsSetAC, (state, action) => {
      state.isSet = action.payload.isSet
    })
    .addCase(setStartAC, (state, action) => {
      state.startValue = action.payload.startValue
    })
    .addCase(setMaxAC, (state, action) => {
      state.maxValue = action.payload.maxValue
    })
    .addCase(setSettingsErrorAC, (state, action) => {
      state.settingsError = action.payload.settingsError
    })
    .addCase(setStartErrorAC, (state, action) => {
      state.startError = action.payload.startError
  })
    .addCase(setMaxErrorAC, (state, action) => {
      state.maxError = action.payload.maxError
    })
});