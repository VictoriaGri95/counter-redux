import type {RootState} from "../app/store.ts";
import type {CounterStateType} from "./counter-reducer.ts";

export const selectCounter = (state: RootState): CounterStateType => state.counter;

