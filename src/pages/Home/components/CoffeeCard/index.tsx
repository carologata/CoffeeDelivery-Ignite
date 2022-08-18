//Rect 
import { useContext } from "react";
import { useForm } from "react-hook-form"

//Context
import { OrdersContext, CoffeeMenuType } from "../../../../contexts/OrderContext";

//Icons
import { ShoppingCartSimple } from "phosphor-react"

//Styled Components
import { Card, CardFooter, CardForm, CardPrice } from "./styles"


//Interfaces
interface FormData {
  quantityInput: number
}

interface CoffeeOrderProps {
  item: CoffeeMenuType
}


export function CoffeeCard({item}: CoffeeOrderProps) {

  const { setContextCartOrders } = useContext(OrdersContext)

  // const [cartOrders, setCartOrders] = useState<CoffeeMenuType[]>([])

  const newOrderForm = useForm<FormData>();
  const { register, handleSubmit, watch, reset } = newOrderForm;

  const thereIsOrder = watch("quantityInput");
  const thereIsNoOrder = !thereIsOrder;
  

  function handleOrderToCart(data: FormData) {

    setContextCartOrders((prev) => {

      //is the item already in the cart?
      const isItemInCart = prev.find(element => element.id_ === item.id_);

      //if item is already in the cart
      if(isItemInCart) {
        return prev.map(element => 
          element.id_ === item.id_
            ? { ...element, quantity: element.quantity + data.quantityInput} 
            : element   
        );
      }

      //if its the first time the item is added 
      return [...prev, {...item, quantity: data.quantityInput}]

    })

    reset();
  }

  
  return (
    <Card>
      <img src={`/public/${item.slug}.png`} alt="Café"/>
      <div>
        {item.typeCoffe.map(type=>{
          return <span>{type}</span>
        })}
      </div>
      <h3>{item.tag}</h3>
      <p>{item.description}</p>

      <CardFooter>
        <CardPrice>
          <small>R$</small>
          <h2>{item.price.toFixed(2)}</h2>
        </CardPrice>
        <CardForm onSubmit={handleSubmit(handleOrderToCart)} action="">
          <input
            min={0}
            max={20}
            type="number"
            {...register("quantityInput",{valueAsNumber: true})}/>
          <button
            type="submit"
            disabled={thereIsNoOrder}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </CardForm>
      </CardFooter>

    </Card>

  )
}