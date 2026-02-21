import s from './DisplayCounterSettings.module.scss';
import * as React from "react";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {
  setIsSetAC,
  setMaxAC,
  setMaxErrorAC, setSettingsErrorAC, setStartAC,
  setStartErrorAC
} from "../../../model/counter-reducer.ts";
import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../../model/counter-selectors.ts";


export const DisplayCounterSettings = () => {

  const dispatch = useAppDispatch()
  const counterState = useAppSelector(selectCounter)
  const {startError, maxError, startValue, maxValue} = counterState


  const updateErrors = (newStartValue: number, newMaxValue: number) => {

    const hasStartError = newStartValue < 0 || newStartValue >= newMaxValue;
    const hasMaxError = newMaxValue <= newStartValue || newMaxValue < 0;

    dispatch(setStartErrorAC({startError: hasStartError}))
    dispatch(setMaxErrorAC({maxError: hasMaxError}))
    dispatch(setSettingsErrorAC({settingsError: hasMaxError || hasStartError}))
  }


  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;

    dispatch(setMaxAC({maxValue: value}))
    dispatch(setIsSetAC({isSet: false}))

    updateErrors(startValue, value)
  };

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;

    dispatch(setStartAC({startValue: value}))
    dispatch(setIsSetAC({isSet: false}))
    updateErrors(value, maxValue)
  };

  return (
    <div className={s.inputWrapper}>
      <div className={s.settingInput}>
        <label className={s.label}>
          Max value:
        </label>
        <input
          type="number"
          className={`${s.input} ${maxError ? s.error : ""}`}
          value={maxValue}
          onChange={handleMaxChange}
        />

      </div>

      <div className={s.settingInput}>
        <label className={s.label}>
          Start value:
        </label>
        <input
          type="number"
          className={`${s.input} ${startError ? s.error : ""}`}
          value={startValue}
          onChange={handleStartChange}
        />

      </div>

    </div>
  );
};

