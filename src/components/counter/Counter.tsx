import {DisplayCounter} from "./displayCounter/DisplayCounter.tsx";
import s from './Counter.module.scss'
import {Button} from "../button/Button.tsx";

export type CounterProps = {
  startValue: number;
  maxValue: number;
  onInc: () => void;
  onReset: () => void;
  counter: number;
  hasError: boolean
  isSet: boolean
}

export const Counter = ({
                          startValue,
                          maxValue,
                          onInc,
                          onReset,
                          counter,
                          hasError,
                          isSet,
                        }: CounterProps) => {

  const hasReachedMax = counter === maxValue;
  const isMinValue = counter === startValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter
        counter={counter}
        isMax={hasReachedMax}
        hasError={hasError}
        isSet={isSet}
      />


      <div className={s.buttonsWrapper}>
        <Button
          title="inc"
          onClick={onInc}
          disabled={!isSet || hasReachedMax || hasError}
        />
        <Button
          title="reset"
          onClick={onReset}
          disabled={!isSet || isMinValue || hasError}
        />
      </div>

    </div>
  );
};
