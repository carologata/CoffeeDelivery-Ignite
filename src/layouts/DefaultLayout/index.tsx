//Components
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

//Styled Components
import { DefaultContainer } from "./styles";

export function DefaultLayout() {

  return(

  <DefaultContainer>
    <Header/>
    <Outlet/>
  </DefaultContainer>


  )
}