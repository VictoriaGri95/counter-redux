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
  return (
    <div className={`${s.displayCounter} ${isMax ? s.counterRed : ''}`}>
      {!isSet && !hasError ? (
          <span className={s.message}>Enter value and press "set"</span>
        )
        : hasError
          ? (<span className={s.errorText}>Incorrect value!</span>)
          : (<span>{counter}</span>)

      }


    </div>
  );
};

