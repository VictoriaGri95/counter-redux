import {DisplayCounter} from "./displayCounter/DisplayCounter.tsx";
import s from './Counter.module.scss'
import {Button} from "../button/Button.tsx";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {incrementAC, resetAC} from "../../model/counter-reducer.ts";


export const Counter = () => {
  const counterState = useAppSelector(selectCounter)

  const dispatch = useAppDispatch()

  const {counter, isSet, startValue, maxValue, settingsError} = counterState

  const onIncHandler = () => {
    dispatch(incrementAC({maxValue}))
  }

  const onResetHandler = () => {
    dispatch(resetAC({startValue}))

  }
  const hasReachedMax = counter === maxValue;
  const isMinValue = counter === startValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter
        counter={counter}
        isMax={hasReachedMax}
        hasError={settingsError}
        isSet={isSet}
      />


      <div className={s.buttonsWrapper}>
        <Button
          title="inc"
          onClick={onIncHandler}
          disabled={!isSet || hasReachedMax || settingsError}
        />
        <Button
          title="reset"
          onClick={onResetHandler}
          disabled={!isSet || isMinValue || settingsError}
        />
      </div>

    </div>
  );
};
