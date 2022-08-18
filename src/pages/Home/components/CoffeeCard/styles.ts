import styled from "styled-components";

export const Card = styled.div`
  width: 25.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: none;
  background: ${props=>props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 2rem;

  img {
    margin-top: -4rem;

    width: 12rem;
    height: 12rem;

    margin-bottom: 1.2rem;
  }

  >div {
    display: flex;
    gap: 0.4rem;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;

    color: ${props=>props.theme["yellow-dark"]};

    padding: 0.4rem 0.8rem;
    background: ${props=>props.theme["yellow-light"]};
    border: none;
    border-radius: 100px;

    margin-bottom: 1.6rem;
  }

  h3 {
    font-weight: 700;
    font-size: 2rem;
    
    color: ${props=>props.theme["base-subtitle"]};

    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 130%;
    text-align: center;

    color: ${props=>props.theme["base-label"]};

    margin-bottom: 3.3rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.3rem;
  align-items: center;
`

export const CardPrice = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  align-items: flex-end;

  small {
    font-size: 1.4rem;
    line-height: 0;

    color: ${props=>props.theme["base-text"]};
  }

  h2 {
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 0;

    color: ${props=>props.theme["base-text"]};
  }
`

export const CardForm = styled.form`

  display: flex;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;

  input {
    width: 7.2rem;
    height: 3.8rem;

    font-size: 1.6rem;
    color: ${props=>props.theme["base-title"]};

    background: ${props=>props.theme["base-button"]};
    border-radius: 6px;
    border: none;

    padding: 0.8rem;

    &::placeholder {
      color: ${props=>props.theme.purple};
    }
  }

  button {
    color: ${props=>props.theme.white};
    line-height: 1;
    
    background: ${props=>props.theme["purple-dark"]};
    border-radius: 6px;
    border: none;

    padding: 0.6rem 0.8rem;

    cursor: pointer;

    &:not(:disabled):hover {
      background: ${props=>props.theme.purple};
    }

    &:disabled {
      cursor: auto;
    }

  }
`