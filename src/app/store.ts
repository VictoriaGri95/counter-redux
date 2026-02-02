import { configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../model/counter-reducer.ts";
import {settingsReducer} from "../model/settings-reducer.ts";


// объединение reducer'ов с помощью combineReducers
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   settings: settingsReducer,
// })

// создание store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    settings: settingsReducer,
  },
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store