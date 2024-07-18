// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './redux/hooks'
import { useDispatch } from 'react-redux'
import { incremented } from './redux/slices/counter'
import { Counter } from './components/Counter'
import { Users } from './components/Users'

function App() {
  // const [count, setCount] = useState(0)

  const counter = useAppSelector((store) => store.counter)

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incremented())}>
          count is {counter.value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Counter />
        <Users />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
