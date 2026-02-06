import s from './App.module.scss'
import {Counter} from "../components/counter/Counter.tsx";
import {
  CounterSettings
} from "../components/counterSettings/CounterSettings.tsx";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectCounter} from "../model/counter-selectors.ts";
import {selectSettings} from "../model/settings-selectors.ts";
import {
  incrementAC,
  resetAC,
  setCounterAC,
  setIsSetAC
} from "../model/counter-reducer.ts";
import {
  setMaxAC,
  setSettingsErrorAC,
  setStartAC
} from "../model/settings-reducer.ts";

function App() {


  const settingsState = useAppSelector(selectSettings)
  const counterState = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  const {counter, isSet} = counterState
  const {startValue, maxValue, settingsError} = settingsState



  const onClickIncHandler = () => {
    dispatch(incrementAC({maxValue}))
  }

  const onClickResetHandler = () => {
    dispatch(resetAC({startValue}))

  }
  const onStartChange = (value: number) => {
    dispatch(setStartAC({startValue: value}))
    dispatch(setIsSetAC({isSet: false}))
  };

  const onMaxChange = (value: number) => {
    dispatch(setMaxAC({maxValue: value}))
    dispatch(setIsSetAC({isSet: false}))
  };
  const onSetClickHandler = () => {
    if (!settingsError) {
      dispatch(setCounterAC({startValue}))
    }
  }
  const setHasError = (hasError: boolean) => {
    dispatch(setSettingsErrorAC({settingsError: hasError}))
  }


  return (
    <div className={s.gridWrapper}>
      <CounterSettings
        startValue={startValue}
        maxValue={maxValue}
        setStartValue={onStartChange}
        setMaxValue={onMaxChange}
        onSetClick={onSetClickHandler}
        hasError={settingsError}
        setHasError={setHasError}
      />
      <Counter
        counter={counter}
        startValue={startValue}
        maxValue={maxValue}
        onInc={onClickIncHandler}
        onReset={onClickResetHandler}
        hasError={settingsError}
        isSet={isSet}
      />
    </div>
  )
}

export default App
