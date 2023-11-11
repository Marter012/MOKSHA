import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  height: 90px;
  background-color: var(--primary);
  z-index: +5;
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const LogoStyled = styled.div`
  padding: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    font-size: 2rem;
    padding: 0px;
  }
`;

export const LinksContainerStyled = styled.div`
  width: 80%;
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
    height: 60px;
    gap:10px;

    a {
      padding: 0.4rem;

      font-size: 0.7rem;
    }
    div {
      font-size: 0%.7;
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

export const CartNavStyled = styled.div`
  position: relative;
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
