import {createAction, createReducer} from "@reduxjs/toolkit";
import {START_VALUE} from "./settings-reducer.ts";


export const incrementAC = createAction<{ maxValue: number }>('counter/increment');
export const resetAC = createAction<{ startValue: number }>('counter/reset');
export const setCounterAC = createAction<{ startValue: number }>('counter/set')
export const setIsSetAC = createAction<{isSet: boolean}>('counter/setIsSet')


export type CounterStateType = {
  counter: number,
  isSet: boolean,
}

const initialState: CounterStateType = {
  counter: START_VALUE,
  isSet: false,
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
});