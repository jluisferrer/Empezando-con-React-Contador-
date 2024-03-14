import { useState } from 'react'
import './App.css'
import { Counter } from './assets/common/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='appDesign'>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>


   </div>
  )
}

export default App
