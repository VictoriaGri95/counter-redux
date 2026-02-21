import s from "./CounterSettings.module.scss";
import {
  DisplayCounterSettings
} from "./displayCounterSettings/DisplayCounterSettings.tsx";
import {Button} from "../button/Button.tsx";
import {setCounterAC} from "../../model/counter-reducer.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";


export const CounterSettings = () => {

  const counterState = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  const {startValue, settingsError} = counterState
  const onSetClick = () => {
    if (!settingsError) {
      dispatch(setCounterAC({startValue}))
    }
  }
  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings />
      <div className={s.buttonsWrapper}>
        <Button
          title="set"
          onClick={onSetClick}
          disabled={settingsError}
        />
      </div>
    </div>
  );
};

