//Apollo
import { gql, useQuery } from "@apollo/client";

//Components
import { CoffeeCard } from "./components/CoffeeCard";

//Icons and SVGs
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Coffe from "../../assets/Coffe-Home.svg"

//Styled Components
import { AdvantageBoxLarge, AdvantageBoxSmall, AdvantagesContainer, BoxIcon, CartIcon, CoffeeList, CoffeeWindow, CupIcon, HomeContainer, ImageContainer, IntroContainer, IntroText, TimerIcon } from "./styles";

//Interface
interface getCoffeeQueryResponse {
  coffees: {
  id_: string;
  tag: string;
  description: string;
  quantity: number
  slug: string;
  price: number;
  typeCoffe: string[];
  }[]
}

//recebendo API do GraphCMS -> const GET_COFFEE_MENU_QUERY
const GET_COFFEE_MENU_QUERY = gql`
  query MyQuery {
  coffees(orderBy: publishedAt_ASC) {
    id_
    tag
    description
    quantity
    slug
    price
    typeCoffe
  }
}
`


export function Home() {

  //useQuery é um hook  do Apollo
  //Apollo tem a função de realizar a chamada do API do GraphCMS
  const { data } = useQuery<getCoffeeQueryResponse>(GET_COFFEE_MENU_QUERY)


  return (
    <HomeContainer>   

      <IntroContainer>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <small>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </small>
          <AdvantagesContainer>
            <AdvantageBoxSmall>
              <CartIcon>
                <ShoppingCart size={16} weight="fill" />
              </CartIcon>
              <p>Compra simples e segura</p>
            </AdvantageBoxSmall>
            <AdvantageBoxLarge>
              <BoxIcon>
                <Package size={16} weight="fill" />
              </BoxIcon>
              <p>Embalagem mantém o café intacto</p>
            </AdvantageBoxLarge>
            <AdvantageBoxSmall>
              <TimerIcon>
                <Timer size={16} weight="fill" />
              </TimerIcon>
              <p>Entrega rápida e rastreada</p>
            </AdvantageBoxSmall>
            <AdvantageBoxLarge>
              <CupIcon>
                <Coffee size={16} weight="fill" />
              </CupIcon>
              <p>O café chega fresquinho até você</p>
            </AdvantageBoxLarge>
          </AdvantagesContainer>
        </IntroText>
        <ImageContainer>
          <img src={Coffe} alt="" />
        </ImageContainer>
      </IntroContainer>

      <CoffeeWindow>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          {data?.coffees.map((coffee)=>{
            return <CoffeeCard key={coffee.id_} item={coffee}/>
          })}
        </CoffeeList>

      </CoffeeWindow>

    </HomeContainer>
  )
}