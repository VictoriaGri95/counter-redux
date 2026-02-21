
import {
  counterReducer,
  incrementAC,
  resetAC,
  setCounterAC,
  setIsSetAC,
  setStartAC,
  setMaxAC,
  setSettingsErrorAC,
  setStartErrorAC,
  setMaxErrorAC,
  type CounterStateType,
  START_VALUE,
  MAX_VALUE
} from './counter-reducer'
import {beforeEach, expect, test} from 'vitest'

let initialState: CounterStateType

beforeEach(() => {
  initialState = {
    counter: START_VALUE,
    isSet: false,
    startValue: START_VALUE,
    maxValue: MAX_VALUE,
    settingsError: false,
    startError: false,
    maxError: false,
  }
})

test('increment when counter < maxValue', () => {
  const state = {...initialState, counter: 5}
  expect(counterReducer(state, incrementAC({maxValue: 8})).counter).toBe(6)
})

test('increment when counter === maxValue', () => {
  const state = {...initialState, counter: 8}
  expect(counterReducer(state, incrementAC({maxValue: 8})).counter).toBe(8)
})

test('increment when counter > maxValue', () => {
  const state = {...initialState, counter: 10}
  expect(counterReducer(state, incrementAC({maxValue: 8})).counter).toBe(10)
})

test('reset to startValue', () => {
  const state = {...initialState, counter: 5, startValue: 2}
  expect(counterReducer(state, resetAC({startValue: 2})).counter).toBe(2)
})

test('setCounter', () => {
  const newState = counterReducer(initialState, setCounterAC({startValue: 5}))
  expect(newState.counter).toBe(5)
  expect(newState.isSet).toBe(true)
})

test('setIsSet', () => {
  expect(counterReducer(initialState, setIsSetAC({isSet: true})).isSet).toBe(true)
  expect(counterReducer(initialState, setIsSetAC({isSet: false})).isSet).toBe(false)
})

test('setStartAC with various values', () => {
  [0, 5, -1, 10].forEach(value => {
    expect(counterReducer(initialState, setStartAC({startValue: value})).startValue).toBe(value)
  })
})

test('setMaxAC with various values', () => {
  [5, 10, 0, 15].forEach(value => {
    expect(counterReducer(initialState, setMaxAC({maxValue: value})).maxValue).toBe(value)
  })
})

test('setSettingsErrorAC', () => {
  expect(counterReducer(initialState, setSettingsErrorAC({settingsError: true})).settingsError).toBe(true)
  expect(counterReducer(initialState, setSettingsErrorAC({settingsError: false})).settingsError).toBe(false)
})

test('setStartErrorAC', () => {
  expect(counterReducer(initialState, setStartErrorAC({startError: true})).startError).toBe(true)
  expect(counterReducer(initialState, setStartErrorAC({startError: false})).startError).toBe(false)
})

test('setMaxErrorAC', () => {
  expect(counterReducer(initialState, setMaxErrorAC({maxError: true})).maxError).toBe(true)
  expect(counterReducer(initialState, setMaxErrorAC({maxError: false})).maxError).toBe(false)
})

test('complete flow: setStart -> setMax -> setCounter -> increment -> reset', () => {
  let state = initialState

  state = counterReducer(state, setStartAC({startValue: 3}))
  state = counterReducer(state, setMaxAC({maxValue: 7}))
  expect(state.startValue).toBe(3)
  expect(state.maxValue).toBe(7)

  state = counterReducer(state, setCounterAC({startValue: 3}))
  expect(state.counter).toBe(3)
  expect(state.isSet).toBe(true)

  state = counterReducer(state, incrementAC({maxValue: 7}))
  state = counterReducer(state, incrementAC({maxValue: 7}))
  expect(state.counter).toBe(5)

  state = counterReducer(state, resetAC({startValue: 3}))
  expect(state.counter).toBe(3)
})

test('error flow: set invalid values -> set errors -> fix values', () => {
  let state = initialState

  state = counterReducer(state, setStartAC({startValue: 10}))
  state = counterReducer(state, setMaxAC({maxValue: 5}))

  state = counterReducer(state, setStartErrorAC({startError: true}))
  state = counterReducer(state, setMaxErrorAC({maxError: true}))
  state = counterReducer(state, setSettingsErrorAC({settingsError: true}))

  expect(state.startError).toBe(true)
  expect(state.maxError).toBe(true)
  expect(state.settingsError).toBe(true)

  state = counterReducer(state, setStartAC({startValue: 2}))
  state = counterReducer(state, setMaxAC({maxValue: 8}))
  state = counterReducer(state, setStartErrorAC({startError: false}))
  state = counterReducer(state, setMaxErrorAC({maxError: false}))
  state = counterReducer(state, setSettingsErrorAC({settingsError: false}))

  expect(state.startError).toBe(false)
  expect(state.maxError).toBe(false)
  expect(state.settingsError).toBe(false)
})

test('negative start values', () => {
  expect(counterReducer(initialState, setStartAC({startValue: -5})).startValue).toBe(-5)
})

test('negative counter values', () => {
  expect(counterReducer(initialState, setCounterAC({startValue: -3})).counter).toBe(-3)
})

test('zero max value', () => {
  expect(counterReducer(initialState, setMaxAC({maxValue: 0})).maxValue).toBe(0)
})

test('increment when maxValue is zero', () => {
  const state = {...initialState, counter: 0, maxValue: 0}
  expect(counterReducer(state, incrementAC({maxValue: 0})).counter).toBe(0)
})

test('incrementAC creates correct action', () => {
  expect(incrementAC({maxValue: 10})).toEqual({
    type: 'counter/increment',
    payload: {maxValue: 10}
  })
})

test('resetAC creates correct action', () => {
  expect(resetAC({startValue: 5})).toEqual({
    type: 'counter/reset',
    payload: {startValue: 5}
  })
})

test('setCounterAC creates correct action', () => {
  expect(setCounterAC({startValue: 3})).toEqual({
    type: 'counter/set',
    payload: {startValue: 3}
  })
})