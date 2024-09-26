import { useState } from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='count-container'>
      <div className='count-wrapper'>
        <button onClick={() => setCount(prev => ++prev)}>+</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(prev => --prev)}>-</button>
      </div>
    </div>
  )
}

export default App
