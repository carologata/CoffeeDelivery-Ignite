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

  //DATA TO TEST
  // const coffeeMenu = [
  //   { 
  //     id: "1",
  //     tag: "Expresso Tradicional",
  //     types: ["TRADICIONAL"],
  //     description: "O tradicional café feito com água quente e grãos moídos",
  //     image: "../../../public/Expresso.png",
  //     price: 9.90,
  //     quantity: 0
  //   },
  //   {
  //     id: "2",
  //     tag: "Café com Leite",
  //     types: ["TRADICIONAL", "COM LEITE"],
  //     description: "Meio a meio de expresso tradicional com leite vaporizado",
  //     image: "../../../public/Type=Café com Leite.png",
  //     price: 9.90,
  //     quantity: 0
  //   }
  // ]


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