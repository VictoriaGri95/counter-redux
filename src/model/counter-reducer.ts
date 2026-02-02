import {createAction, createReducer} from "@reduxjs/toolkit";
import {START_VALUE} from "./settings-reducer.ts";


export const incrementAC = createAction<number>('counter/increment');
export const resetAC = createAction<number>('counter/reset');
export const setCounterAC = createAction<number>('counter/set')
export const setIsSetAC = createAction<boolean>('counter/setIsSet')


const initialState = {
  counter: START_VALUE,
  isSet: false,
}

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementAC, (state, action) => {
      if (state.counter < action.payload) {
        state.counter += 1
      }
    })
    .addCase(resetAC, (state, action) => {
      state.counter = action.payload
    })
    .addCase(setCounterAC, (state, action) => {
      state.counter = action.payload
      state.isSet = true
    })
    .addCase(setIsSetAC, (state, action) => {
      state.isSet = action.payload
    })
});