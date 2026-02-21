import s from './displayCounter.module.scss'


type DisplayCounterPropsType = {
  counter: number
  isMax: boolean
  hasError: boolean
  isSet: boolean
}

export const DisplayCounter = ({
                                 counter,
                                 isMax,
                                 hasError,
                                 isSet
                               }: DisplayCounterPropsType) => {

  const getDisplayContent = () => {
    if (hasError) {
      return <span className={s.errorText}>Incorrect value!</span>
    }
    if (!isSet && !hasError) {
      return <span className={s.message}>Enter value and press "set"</span>
    }

    return <span>{counter}</span>
  }


  return (
    <div className={`${s.displayCounter} ${isMax ? s.counterRed : ''}`}>
      {
        getDisplayContent()
      }

    </div>
  );
};

