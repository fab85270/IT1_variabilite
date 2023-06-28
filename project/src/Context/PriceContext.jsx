import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 export const PriceContext = createContext({
    price: 0,
    setPrice: () => {}   
})

export const PriceContextProvider = ({children}) => { 
  
    const [price,setPrice] = useState(0);

      return (<PriceContext.Provider value={{price,setPrice}}> {children} </PriceContext.Provider>)
};
  
  