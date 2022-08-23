import { createContext, ReactNode, useState } from "react";

//Interface / Types

//TYPE Coffee Menu Data
export type CoffeeMenuType = {
  id_: string,
  tag: string,
  typeCoffe: string[],
  description: string,
  slug: string,
  price: number,
  quantity: number,
}


//INTEFACE Data to move throught Context
interface OrdersContextType {
  cartOrders: CoffeeMenuType[],
  setContextCartOrders: (ContextCartOrders: CoffeeMenuType[])=>void,
} 

//Create Context --> OrdersContext
export const OrdersContext = createContext({} as OrdersContextType)

//OrdersContextProvider --> see on App.tsx
interface CycleChildrenProps {
  children: ReactNode;
}

export function OrdersContextProvider({children}:CycleChildrenProps) {

  //Use State
  const [cartOrders, setCartOrders] = useState<CoffeeMenuType[]>([])

  function setContextCartOrders(ContextCartOrders: CoffeeMenuType[]) {
    setCartOrders(ContextCartOrders)
  }

  return(
    <OrdersContext.Provider value={{setContextCartOrders, cartOrders}}>
      {children}
    </OrdersContext.Provider>
  )
}