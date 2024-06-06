import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isOn, setIsOn] = useState(false)

    const handleSwitch = () => {
        setIsOn(!isOn)
    }

  return (
    <AppContext.Provider value={{isOn, handleSwitch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext