import { useContext } from 'react'
import './App.css'
import AppContext from './context/AppContext'

function App() {
  const {isOn, handleSwitch} = useContext(AppContext)
  return (
    <>
    <button onClick={handleSwitch}>Button</button>
    <h4>Button is switched = {isOn ? 'On' : 'Off'}</h4>
    </>
  )
}

export default App
