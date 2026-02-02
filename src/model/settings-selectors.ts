import type {RootState} from "../app/store.ts";
import type {SettingsStateType} from "./settings-reducer.ts";

export const selectSettings = (state: RootState):SettingsStateType => state.settings;