import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-block: 3.2rem;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  align-items: center;

  padding: 0.8rem;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`

export const LocalBox = styled(MenuBox)`
  color: ${props=>props.theme["purple-dark"]};
  background: ${props=>props.theme["purple-light"]};

  span {
    font-weight: 400;
    font-size: 1.4rem;
  }
`

export const BagBox = styled(MenuBox)`
  position: relative;

  color: ${props=>props.theme["yellow-dark"]};
  background: ${props=>props.theme["yellow-light"]};
`

export const CartQtyCircle = styled.button`
  width: 2rem;
  height: 2rem;

  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1000px;
  border: none;
  background: ${props=>props.theme["yellow-dark"]};
  
  &:disabled {
    visibility: hidden;
  }

  small {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.06em;

    color: ${props=>props.theme.white}
  }
`