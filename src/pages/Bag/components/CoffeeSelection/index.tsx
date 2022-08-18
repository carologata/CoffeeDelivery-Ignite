//React
import { useContext } from "react";

//Context
import { CoffeeMenuType, OrdersContext } from "../../../../contexts/OrderContext"

//Icons
import { Minus, Plus, Trash } from "phosphor-react";

//Styled Components
import { CoffeeInputContainer, CoffeeSelectionContainer, CoffeeSelectionInput, InputButtonContainer, RemoveButton } from "./styles";


//interface
interface CoffeeSelectionType {
  item: CoffeeMenuType,
}

export function CoffeeSelection({item}:CoffeeSelectionType) {

  //Context
  const { setContextCartOrders } = useContext(OrdersContext)

  //Function Subtract Quantity in the Cart
  function handleSubtractQuantity(id: string) {
    
    setContextCartOrders(prev => 
      
      prev.reduce((prevVal, element) => {
        
        if(element.id_ === id){
          if (element.quantity === 1) return prevVal;
          return [...prevVal, {...element, quantity: element.quantity - 1}];
        } else {
          return [...prevVal, element];
        }

      },[] as CoffeeMenuType[])
    )
  }

  //Function Add Quantity in the Cart
  function handleAddQuantity(id:string){

    setContextCartOrders((prev) => prev.map(element => {
        if(element.id_ === id) {
          return {...element, quantity: element.quantity + 1}
        } 
        
        return element
        
      }))
  }

  //Function Remove Item from the Cart
  function handleRemoveCoffeeSelection(id:string){

    setContextCartOrders((prev)=>prev.reduce((prevVal, element)=>{

      if(element.id_ === item.id_){
        return prevVal;
      }

      return [...prevVal, element];

    },[] as CoffeeMenuType[]))
  }

  //Total price 
  const priceTotalItem = item.price * item.quantity

  return(
    <CoffeeSelectionContainer>
      <img src={`/public/${item.slug}.png`} alt="" />
      <CoffeeInputContainer>
        <span>{item.tag}</span>
        <InputButtonContainer>
          <CoffeeSelectionInput>
            <button 
              type="button"
              onClick={()=>handleSubtractQuantity(item.id_)}>
              <Minus size={14} weight="bold"/>
            </button>
            <span>{item.quantity}</span>
            <button
              type="button"
              onClick={()=>handleAddQuantity(item.id_)}>
              <Plus size={14} weight="bold"/>
            </button>
          </CoffeeSelectionInput>
          <RemoveButton
            onClick={()=>handleRemoveCoffeeSelection(item.id_)}>
            <Trash size={16} />
            <small>REMOVER</small>
          </RemoveButton>
        </InputButtonContainer>
      </CoffeeInputContainer>
      <strong>R$ {priceTotalItem.toFixed(2)}</strong>
    </CoffeeSelectionContainer>
  )
}