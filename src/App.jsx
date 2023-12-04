import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState()
  const [number, setNumber] = useState(0)

  return (
    <div className='App'>

      <h2>O nome digitado é: {name}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <div>

        <h3>Contador : {number}</h3>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={() => setNumber(number - 1)}>-</button>

      </div>
 
    </div>

  )
}

export default App
