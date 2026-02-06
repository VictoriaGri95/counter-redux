import s from './DisplayCounterSettings.module.scss';
import * as React from "react";
import {useState} from "react";


export type DisplayCounterSettingsProps = {
  startValue: number
  maxValue: number
  setStartValue: (startValue: number) => void
  setMaxValue: (maxValue: number) => void
  hasError: boolean
  setHasError: (hasError: boolean) => void
}

export const DisplayCounterSettings = ({
                                         startValue,
                                         maxValue,
                                         setStartValue,
                                         setMaxValue,
                                         setHasError
                                       }: DisplayCounterSettingsProps) => {
  const [startError, setStartError] = useState(false);
  const [maxError, setMaxError] = useState(false);

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMaxValue(value);

    const hasMaxError = value <= startValue || value < 0;
    const hasStartError = startValue < 0 || startValue >= value;

    setMaxError(hasMaxError);
    setStartError(hasStartError);
    setHasError(hasMaxError || hasStartError);
  };

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setStartValue(value);

    const hasStartError = value < 0 || value >= maxValue;
    const hasMaxError = maxValue <= value || maxValue < 0;

    setStartError(hasStartError);
    setMaxError(hasMaxError);
    setHasError(hasStartError || hasMaxError);
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

