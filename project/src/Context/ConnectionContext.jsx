import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 export const ConnectionContext = createContext({
    isConnected: false,
    setIsConnected: () => {}   
})

export const ConnectionContextProvider = ({children}) => { 
  
    const [isConnected,setIsConnected] = useState(false);

      return (<ConnectionContext.Provider value={{isConnected,setIsConnected}}> {children} </ConnectionContext.Provider>)
};
  
  