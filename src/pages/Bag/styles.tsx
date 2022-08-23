import styled from "styled-components";


export const BagForm = styled.form`
  display: flex;
  gap: 3.2rem;

  text-align: left;

  padding-top: 4rem;
  padding-bottom: 24rem;
`

export const AdressPaymentOrderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h5 {
    font-weight: 700;
    font-size: 1.8rem;
    color: ${props=>props.theme["base-subtitle"]};

    margin-bottom: 1.5rem;
  }
`

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 4rem;

  background: ${props=>props.theme["base-card"]};

  margin-bottom: 1.2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items:flex-start;

  line-height: 1rem;
`

export const AdressTitleContainer = styled(TitleContainer)`
  color: ${props=>props.theme["yellow-dark"]};
`

export const PaymentTitleContainer = styled(TitleContainer)`
  color: ${props=>props.theme.purple};
`

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 3.2em;

  span {
      font-size: 1.6rem;
      line-height: 130%;
      color: ${props=>props.theme["base-subtitle"]}
    }

    small {
      font-size: 1.4rem;
      line-height: 130%;  
      color: ${props=>props.theme["base-subtitle"]}
    }
`

export const AdressFormContainer = styled.div`
  display: flex;
`

export const FormBox = styled.input`
  height: 4.2rem;
  
  font-size: 1.4rem;
  color: ${props=>props.theme["base-text"]};
  background: ${props=>props.theme["base-input"]};
  border: none;
  border: 1px solid ${props=>props.theme["base-button"]};
  border-radius: 4px;

  padding: 1.2rem;

  &::placeholder {
    font-size: 1.4rem;
    color: ${props=>props.theme["base-label"]};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["yellow-dark"]};
  }
`


export const BoxCEP = styled(FormBox)`
  width: 20rem;
`

export const BoxStreet = styled(FormBox)`
  width: 100%;
  margin-top: 1.6rem;
`

export const NumberContainer = styled.div`
  display: flex;

  margin-top: 1.6rem;
`

export const BoxError = styled.div`
  display: flex;
  flex-direction: column;
`

export const BoxErrorNumber = styled(BoxError)`
  margin-right: 1.2rem;
  margin-bottom: 1.6rem;
`

export const BoxNumber = styled(FormBox)`
  width: 20rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const BoxComplement = styled(FormBox)`
  flex: 1;
  margin-bottom: 1.6rem;
`

export const DistrictContainer = styled.div`
  display: flex; 
`

export const BoxErrorDistrict = styled(BoxError)`
  margin-right: 1.2rem;
`

export const BoxDistrict = styled(FormBox)`
  width: 20rem;
`

export const BoxErrorCity = styled(BoxError)`
  flex: 1;

  margin-right: 1.2rem;
`

export const BoxCity = styled(FormBox)`
  
`

export const BoxState = styled(FormBox)`
  width: 6rem;
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const InputPaymentOptions = styled.input`
  -webkit-appearance: none;
  border: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px transparent;
  }

  &:checked + label {
    background: ${props=>props.theme["purple-light"]};
    border: 1px solid ${props=>props.theme.purple};
  }

  &:not(:checked):hover + label {
    background: ${props=>props.theme["base-hover"]};
  }
`

export const LabelPaymentOptions = styled.label `
  display: flex;
  gap: 1.2rem; 
  align-items: center; 

  width: 18.1rem;

  text-align: left;
  color: ${props=>props.theme.purple};
  line-height: 1rem;

  background: ${props=>props.theme["base-button"]};
  border-radius: 6px;
  border: 1px solid ${props=>props.theme["base-button"]};

  padding: 1.6rem;

  cursor: pointer;
  
  p {
    font-size: 1.2rem;
    line-height: 160%;

    color: ${props=>props.theme["base-text"]};
  }
`
  
export const OrderContainer = styled.div`
  width: 44.8rem;

  display: flex;
  flex-direction: column;

  padding: 4rem;

  border: none;
  border-radius: 6px 44px;
  background: ${props=>props.theme["base-card"]};

  margin-bottom: 1.2rem;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-bottom: 2.4rem;
`

export const ItensAndFreight = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props=>props.theme["base-text"]};

  span {
    font-size: 1.6rem;
  }

  small {
    font-size: 1.4rem;
  }
`

export const PriceTotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props=>props.theme["base-subtitle"]};

  strong {
    font-size: 2rem;
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;

  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 700;

  color: ${props=>props.theme.white};
  text-transform: uppercase;

  padding: 1.2rem;

  background: ${props=>props.theme.yellow};
  border-radius: 6px;
  border: none;

  cursor: pointer;

  &:hover {
    background: ${props=>props.theme["yellow-dark"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px transparent;
  }
`

export const SpanError = styled.span`
  font-size: 1.2rem;
  
  color: ${props=>props.theme["yellow-dark"]};

  margin-top: 0.5rem;
  margin-left: 1rem;
`

export const SpanErrorPayment = styled.span`
  font-size: 1.2rem;
  
  color: ${props=>props.theme["yellow-dark"]};

  margin-top: 0.5rem;
  margin-left: 2.5rem;
`