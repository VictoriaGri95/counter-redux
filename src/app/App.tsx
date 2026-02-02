import s from './App.module.scss'
import {Counter} from "../components/counter/Counter.tsx";
import {
  CounterSettings
} from "../components/counterSettings/CounterSettings.tsx";
import {useState} from "react";

function App() {
  const [settingsError, setSettingsError] = useState(false);

  const [isSet, setIsSet] = useState(false)

  const getValueFromLS = (key: "startValue" | "maxValue", number: number) => {
    const newValue = localStorage.getItem("counterValue");
    return newValue && newValue !== "undefined" ? JSON.parse(newValue)[key] : number;
  }
  const MAX_VALUE = 8;
  const START_VALUE = 0;

  const [maxValue, setMaxValue] = useState(getValueFromLS("maxValue", MAX_VALUE));
  const [startValue, setStartValue] = useState(getValueFromLS("startValue", START_VALUE));

  const [counter, setCounter] = useState<number>(startValue);


  const onClickIncHandler = () => {
    const newCount = counter + 1;
    if (newCount <= maxValue) {
      setCounter(newCount)
    }
  }

  const onClickResetHandler = () => {
    setCounter(startValue)

  }
  const onStartChange = (value: number) => {
    setStartValue(value);
    setIsSet(false);
  };

  const onMaxChange = (value: number) => {
    setMaxValue(value);
    setIsSet(false);
  };
  const onSetClickHandler = () => {
    if (!settingsError) {
      setCounter(startValue)
      setIsSet(true);
      localStorage.setItem('counterSettings', JSON.stringify({
        startValue,
        maxValue
      }))
    }
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
        setHasError={setSettingsError}
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
