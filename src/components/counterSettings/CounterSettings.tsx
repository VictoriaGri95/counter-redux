import s from "./CounterSettings.module.scss";
import {
  DisplayCounterSettings
} from "./displayCounterSettings/DisplayCounterSettings.tsx";
import {Button} from "../button/Button.tsx";


export type CounterSettingsProps = {
  startValue: number;
  maxValue: number;
  setStartValue: (startValue: number) => void;
  setMaxValue: (maxValue: number) => void;
  onSetClick: () => void;
  hasError: boolean,
  setHasError: (hasError: boolean) => void
}

export const CounterSettings = ({
                                  startValue,
                                  maxValue,
                                  setStartValue,
                                  setMaxValue,
                                  onSetClick,
                                  hasError,
                                  setHasError,
                                }: CounterSettingsProps) => {


  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings
        startValue={startValue}
        maxValue={maxValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
        setHasError={setHasError}
        hasError={hasError}
      />
      <div className={s.buttonsWrapper}>
        <Button
          title="set"
          onClick={onSetClick}
          disabled={hasError}
        />
      </div>
    </div>
  );
};

