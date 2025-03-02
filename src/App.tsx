import { useState } from 'react'
import './App.css'
import EntryComponent from './types/Entry'
import { Entry } from './types'
import { estonia2025, finland2025 } from './data/2025'
import PrintEntry from './types/Entry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Comparing:</h2>
    <EntryComponent entry={finland2025} />
    <EntryComponent entry={estonia2025} />
    </>
    /* <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
  )
}

export default App
