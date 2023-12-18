import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 130px;
  background-color: var(--primary);
  z-index: +50;
  position: fixed;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 960px) {
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
  width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
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
    a {
      padding: 0.5rem;

      font-size: 1rem;
    }
    div {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    width: 50vw;
    transition-duration: 1s;
    ${({ burgerMenu }) => (burgerMenu ? { left: "0vw" } : { left: "-120vw" })}
    border-top: 1px solid black;
    box-shadow: 0 19px 38px black;
    top: 130px;
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

export const PanelClose = styled.div`
  display: flex;
  position: fixed;
  z-index: +100;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  ${({ showPanelClose }) =>
    !showPanelClose ? { top: "-100vh" } : { top: "0px" }}
  transition-duration: 1s;

  section {
    cursor: pointer;
    display: flex;
    position: absolute;
    border-bottom-left-radius: 15px;
    border-left: 1px dashed red;
    background-color: red;
    top: 0;
    right: 0;
    width: 20vw;
    height: 70px;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    section {
      width: 30vw;
    }
  }

  @media (max-width: 600px) {
    section {
      width: 50vw;
      height: 130px;
    }
  }
`;

export const LinkContainerStyled = styled.div`
  color: black;
  font-size: 1.5rem;
`;

export const CartNavStyled = styled.div`
  margin-right: 32px;
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

  @media (max-width : 600px) {
    position: absolute;
    top: -75px;
    left: 80px;
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
