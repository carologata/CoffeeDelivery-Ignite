//React
import { useContext } from "react";

//React Router Dom
import { NavLink } from "react-router-dom";

//Context
import { OrdersContext } from "../../contexts/OrderContext";

//Icons and SVGs
import Logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";

//Styled Components
import { BagBox, CartQtyCircle, HeaderContainer, LocalBox, MenuContainer } from "./styles";


export function Header() {

  const { cartOrders } = useContext(OrdersContext)

  const thereIsNoOrder = cartOrders.length === 0;

  const totalItems = cartOrders.reduce((prevVal, element) => prevVal + element.quantity, 0)

  return(

    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={Logo}/>
      </NavLink>
      <MenuContainer>
        <NavLink to="/" title="Cidade">
          <LocalBox>
            <MapPin size={22} weight="fill" />
            <span>Curitiba, PR</span>
          </LocalBox>
        </NavLink>
        <NavLink to="/Sacola" title="Sacola">
          <BagBox>
            <ShoppingCart size={22} weight="fill"/>
            <CartQtyCircle
              disabled={thereIsNoOrder}>
              <small>{totalItems}</small>
            </CartQtyCircle>
          </BagBox>
        </NavLink>
      </MenuContainer>
    </HeaderContainer>
  )
}