import {createAction, createReducer} from "@reduxjs/toolkit";

export const setStartAC = createAction<{startValue: number}>('settings/setStart')
export const setMaxAC = createAction<{maxValue: number}>('settings/setMax')
export const setSettingsErrorAC = createAction<{settingsError: boolean}>('settings/setSettingsError')

export const MAX_VALUE = 8;
export const START_VALUE = 0;

export type SettingsStateType = {
  startValue: number,
  maxValue: number,
  settingsError: boolean,
}

const initialState: SettingsStateType = {
  startValue: START_VALUE,
  maxValue: MAX_VALUE,
  settingsError: false
}

export const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStartAC, (state, action) => {
      state.startValue = action.payload.startValue
    })
    .addCase(setMaxAC, (state, action) => {
      state.maxValue = action.payload.maxValue
    })
  .addCase(setSettingsErrorAC, (state, action) => {
    state.settingsError = action.payload.settingsError
  })
})