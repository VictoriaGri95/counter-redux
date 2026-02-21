import s from './App.module.scss'
import {Counter} from '../components/counter/Counter'
import {CounterSettings} from '../components/counterSettings/CounterSettings'


function App() {

  return (
    <div className={s.gridWrapper}>
      <CounterSettings />
      <Counter />
    </div>
  )
}

export default App
