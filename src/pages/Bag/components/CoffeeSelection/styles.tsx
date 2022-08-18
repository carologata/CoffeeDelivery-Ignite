import styled from "styled-components";



export const CoffeeSelectionContainer = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 0.8rem 0.4rem 3.2rem 0.4rem;

  margin-bottom: 2.4rem;

  border-bottom: 1px solid ${props=>props.theme["base-button"]};

  img {
    width: 6.4rem;
    height: 6.4rem;

    margin-right: 2rem;
  }

  strong {
    font-weight: 700;
    font-size: 1.6rem;

    color: ${props=>props.theme["base-text"]};
  }
`

export const CoffeeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: flex-start;

  margin-right: 4rem;

  span {
    font-size: 1.6rem;
    color: ${props=>props.theme["base-subtitle"]}
  }
`

export const InputButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const CoffeeSelectionInput = styled.div`
  width:7.2rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  gap: 0.6rem;
  align-items: center;

  background: ${props=>props.theme["base-button"]};
  border-radius: 6px;
  border: none;

  button {
    line-height: 1;
    color: ${props=>props.theme.purple};
    
    border: none;
    background: none;

    cursor: pointer;

    :focus {
    outline: 0;
    box-shadow: 0 0 0 transparent;
    }
  }

  span {
    font-size: 1.6rem;
    color: ${props=>props.theme["base-title"]};
  }
`


export const RemoveButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  padding: 0.8rem;

  color: ${props=>props.theme.purple};
  background: ${props=>props.theme["base-button"]};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover{
    background: ${props=>props.theme["base-hover"]};
  }

  small {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${props=>props.theme["base-text"]};
  }
`

