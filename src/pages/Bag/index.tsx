//React Hook Form
import { useForm } from "react-hook-form";
import { useContext } from "react";

//Context
import { OrdersContext } from "../../contexts/OrderContext";

//Components
import { CoffeeSelection } from "./components/CoffeeSelection";

//Icons
import { Bank, Check, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

//Styled Components
import { AdressPaymentOrderContainer, AdressTitleContainer, BagForm, BoxCEP, BoxCity, BoxComplement, BoxDistrict, BoxError, BoxErrorCity, BoxErrorDistrict, BoxErrorNumber, BoxNumber, BoxState, BoxStreet, ConfirmOrderButton, Container, DistrictContainer, InputPaymentOptions, ItensAndFreight, LabelPaymentOptions, NumberContainer, OrderContainer, PaymentOptionsContainer, PaymentTitleContainer, PriceTotalBox, SpanError, SpanErrorPayment, TitleLine, TotalContainer } from "./styles";

//Apollo
import { gql, useMutation } from "@apollo/client";

//Yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { object } from "yup";

//SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//Interfaces
interface CepObjectType {
  cepForm: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string; 
  estado: string;
  payment: string;
  coffeeBag: CoffeeBagType[]
}

interface CoffeeBagType {
  name: string;
  quantity: number
}


//Validation Schema
const OrderFormValidationSchema = object({
  cepForm: yup.string().required("Campo obrigatório"),
  logradouro: yup.string().required("Campo obrigatório"), 
  numero: yup.number().typeError("Deve ser um número").required("Campo obrigatório"),
  bairro: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
  estado: yup.string().required("Campo obrigatório"),
  payment: yup.string().typeError("Escolha uma opção de pagamento").required("Escolha uma opção de pagamento")
})

//Mutation
const CREATE_ORDER_MUTATION = gql`
mutation CreateOrder ($cep: String!, $logradouro: String!, $bairro: String!, $cidade: String!, $estado: String!, $payment: String!, $numero: Int!, $coffeeBag: [CoffeeRequestCreateInput!]) {
  createOrder(
    data: {cep: $cep, logradouro: $logradouro, bairro: $bairro, cidade: $cidade, estado: $estado, payment: $payment, numero: $numero, coffeeBag: {create: $coffeeBag}}
  ) {
    id
  }
}
`


export function Bag() {

  //Context
  const { cartOrders, setContextCartOrders } = useContext(OrdersContext)

  //useMutation é um hook  do Apollo
  const [createOrder] = useMutation(CREATE_ORDER_MUTATION)
  

  //Function Submit Form  
function submitForm(info: CepObjectType) {

  const MySwal = withReactContent(Swal);

  if (cartOrders.length >= 1) {

    createOrder({
      variables:{
        cep: info.cepForm, 
        logradouro: info.logradouro,
        bairro: info.bairro, 
        cidade: info.cidade, 
        estado: info.estado, 
        payment: info.payment, 
        numero: info.numero, 
        complemento: info.complemento,
      
        coffeeBag: cartOrders.map((order)=>{
            return {
              name: order.tag,
              quantity: order.quantity
            }   
        })
      }

  })

  
  reset();

  setContextCartOrders([]);

  MySwal.fire(<h4> Pedido realizado com sucesso! <Check size={30}  weight="bold"/></h4>)

  }

  else {

    MySwal.fire(<p>Escolha seu café</p>)

  }
  

}
  


  //useForm and Yup Schema Validation
  const { register, setValue, handleSubmit, formState:{errors}, clearErrors, reset } = useForm<CepObjectType>({resolver: yupResolver(OrderFormValidationSchema)});


  //Price Calculation
  const priceTotalItens = cartOrders.reduce((prevVal, element) => prevVal + (element.price * element.quantity),0);

  const frete = 3.50;

  const total = priceTotalItens + frete;

  
  //Information from CEP API
  function onBlurCep(event: React.FocusEvent<HTMLInputElement>) {
    
    const { value } = event.target;
    
    //regExp 
    const cep:string = value?.replace(/[^0-9]/g,"");

    if(cep?.length !== 8){
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data=>{
      setValue("logradouro", data.logradouro)
      setValue("bairro", data.bairro)
      setValue("cidade", data.localidade)
      setValue("estado", data.uf)
    })

    clearErrors(["logradouro", "bairro", "cidade", "estado"])
  }



  return (
      <BagForm onSubmit={handleSubmit(submitForm)} action="">

        <AdressPaymentOrderContainer>
          <h5>Complete seu pedido</h5>

          <Container>
            <AdressTitleContainer>
              <MapPinLine size={22} />
              <TitleLine>
                <span>Endereço de Entrega</span> 
                <small>Informe o endereço onde deseja receber seu pedido</small>
              </TitleLine>
            </AdressTitleContainer>
            <BoxCEP
                  type="text" 
                  placeholder="CEP"
                  {...register("cepForm")}
                  onBlur={onBlurCep}/>
            <SpanError>{errors?.cepForm?.message}</SpanError>
            <BoxStreet  
                type="text" 
                placeholder="Rua"
                {...register("logradouro")}/>
            <SpanError>{errors?.logradouro?.message}</SpanError>
            <NumberContainer>
            <BoxErrorNumber>
              <BoxNumber
                type="number" 
                placeholder="Número"
                  {...register("numero")}/>
              <SpanError>{errors?.numero?.message}</SpanError>
            </BoxErrorNumber>
              <BoxComplement 
                type="text" 
                placeholder="Complemento (Opcional)"
                {...register("complemento")}/>
            </NumberContainer>
            <DistrictContainer>
              <BoxErrorDistrict>
                <BoxDistrict 
                  type="text" 
                  placeholder="Bairro"
                  {...register("bairro")}/>
                <SpanError>{errors?.bairro?.message}</SpanError>
              </BoxErrorDistrict>
              <BoxErrorCity>
                <BoxCity
                type="text" 
                placeholder="Cidade"
                {...register("cidade")}/>
                <SpanError>{errors?.cidade?.message}</SpanError>
              </BoxErrorCity>
              <BoxError>
                <BoxState
                  type="text" 
                  placeholder="UF"
                  {...register("estado")}/>
                <SpanError>{errors?.estado?.message}</SpanError>
              </BoxError>
            </DistrictContainer>
          </Container>
          
          <Container>
            <PaymentTitleContainer>
              <CurrencyDollar size={22} />
              <TitleLine>
                <span>Pagamento</span> 
                <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
              </TitleLine>
            </PaymentTitleContainer>
            <PaymentOptionsContainer>
              <InputPaymentOptions 
                type="radio" 
                id="credito" 
                value="credito" 
                {...register("payment")}/>
              <LabelPaymentOptions htmlFor="credito">
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </LabelPaymentOptions>
              <InputPaymentOptions 
                type="radio" 
                id="debito" 
                value="debito"
                {...register("payment")}/>
              <LabelPaymentOptions htmlFor="debito">
                <Bank size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </LabelPaymentOptions>
              <InputPaymentOptions 
                type="radio" 
                id="dinheiro" 
                value="dinheiro"
                {...register("payment")}/>
              <LabelPaymentOptions htmlFor="dinheiro">
                <Money size={16} />
                <p>DINHEIRO</p>
              </LabelPaymentOptions>
            </PaymentOptionsContainer>
            <SpanErrorPayment>{errors?.payment?.message}</SpanErrorPayment>
          </Container>

        </AdressPaymentOrderContainer>

        <AdressPaymentOrderContainer>
          <h5>Cafés selecionados</h5>
          
          <OrderContainer>
            
            {cartOrders.map((order)=>{
              return <CoffeeSelection key={order.id_} item={order}/>
            })}
            
            <TotalContainer>
              <ItensAndFreight>
                <small>Total de itens</small>
                <span>R$ {priceTotalItens.toFixed(2)}</span>
              </ItensAndFreight>
              <ItensAndFreight>
                <small>Entrega</small>
                <span>R$ {frete.toFixed(2)}</span>
              </ItensAndFreight>
              <PriceTotalBox>
                <strong>Total</strong>
                <strong>R$ {total.toFixed(2)}</strong>
              </PriceTotalBox>
            </TotalContainer>

            <ConfirmOrderButton 
              type="submit">
              CONFIRMAR PEDIDO  
            </ConfirmOrderButton>

          </OrderContainer>

        </AdressPaymentOrderContainer>

      </BagForm>
  
  )
}