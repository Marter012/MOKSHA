import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  height: 90px;
  width: 100vw;
  background-color: var(--primary);
  z-index: +5;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoStyled = styled.div`
  font-size: 3rem;
  font-weight: 800;
  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const LinksContainerStyled = styled.div`
  width: 70%;
  color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 40px;

  a {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    gap: 5px;
    color: black;
    text-decoration: none;
  }

  a:hover {
    background-color: #7fb8ac;
  }

  @media (max-width: 1100px) {
    width: 50%;
    a {
      padding: 0.5rem;

      font-size: 1rem;
    }
    div {
      font-size: 1rem;
    }
  }

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    transition-duration: 1s;
    ${({ burgerMenu }) =>
      burgerMenu
        ? { left : "0px"}
        : { left : "-300px"}}
    border-top: 1px solid black;
    box-shadow: 0 19px 38px black;
    width: 40vw;
    top: 85px;
    gap: 30px;
    background-color: var(--primary);
    border-bottom-right-radius: 10px;
    div {
      width: 100%;
      div {
        font-size: 1.2rem;
      }
    }
    a {
      font-size: 1.2rem;
    }
  }
  
`;
export const UserContainerStyled = styled.div`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  color: black;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  div:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: #333;
    transition: left 0.8s;
  }

  div:hover:after {
    left: 0;
  }

  @media (max-width: 1100px) {
    padding: 0.5rem;

    div {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0.4rem;

    div {
      font-size: 0.7rem;
    }
  }
`;

export const LinkContainerStyled = styled.div`
  color: black;
  font-size: 1.5rem;
`;

export const ContainerCartIcon = styled.div`
  width: 10px;
`;

export const CartNavStyled = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;

  span {
    position: absolute;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid black;
    color: black;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const ContainerMenuHamburger = styled.div`
  display: none;
  padding: 15px;
  font-size: 2rem;
  @media (max-width: 600px) {
    display: flex;
  }
`;
