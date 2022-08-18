import styled from "styled-components";


export const HomeContainer = styled.main`
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: flex-start;

  padding-block: 9.2rem;
`

export const IntroText = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1{
    font-weight: 800;
    font-size: 4.8rem;

    color: ${props=>props.theme["base-title"]};

    margin-bottom: 1.6rem;
  }

  small {
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${props=>props.theme["base-title"]};

    margin-bottom: 6.6rem;
  }
`

export const AdvantagesContainer = styled.div`
  display: flex;
  gap: 2rem;

  flex-wrap: wrap;  

`

export const AdvantageBox = styled.div`
  display: flex;
  justify-content: left;
  gap: 1.2rem;
  align-items: center;  

  p {
    font-size: 1.6rem;
    color: ${props=>props.theme["base-text"]};
  } 
`

export const AdvantageBoxSmall = styled(AdvantageBox)`
  width: 23.1rem;
`

export const AdvantageBoxLarge = styled(AdvantageBox)`
  width: 29.4rem;
`


export const IconBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  border: none;
  border-radius: 1000px;

  padding: 0.8rem;

  color: ${props=>props.theme["white"]};
`

export const CartIcon = styled(IconBox)`
  background: ${props=>props.theme["yellow-dark"]};
`

export const BoxIcon = styled(IconBox)`
  background: ${props=>props.theme["base-text"]};
`

export const TimerIcon = styled(IconBox)`
  background: ${props=>props.theme["yellow"]};
`

export const CupIcon = styled(IconBox)`
  background: ${props=>props.theme["purple"]};
`

export const ImageContainer = styled.div`
  width: 47.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`

export const CoffeeWindow = styled.section`
  display: flex;
  flex-direction: column;
  
  padding-block: 3.2rem;
  
  h1 {
    font-weight: 800;
    font-size: 3.2rem;
    
    color: ${props=>props.theme["base-title"]};

    margin-bottom: 3.4rem;
  }

`

export const CoffeeList = styled.div`
  display: flex;
  justify-content: left;
  gap: 3.2rem;

  flex-wrap: wrap;
`