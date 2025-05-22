import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import GamePlay from './components/GamePlay';



function App() {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  }
  
  return (
    <>
     {
      isGameStarted ? <GamePlay/> : <Home toggle = {toggleGamePlay} />
     }
    </>
  )
}

export default App
