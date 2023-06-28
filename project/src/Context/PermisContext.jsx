import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 export const PermisContext = createContext({
    permis: false,
    setPermis: () => {}   
})

export const PermisContextProvider = ({children}) => { 
  
    const [permis,setPermis] = useState(false);
    return (<PermisContext.Provider value={{permis,setPermis}}> {children} </PermisContext.Provider>)
};
  
  