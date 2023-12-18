import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ModalContainerStyled = styled.div`
  position: fixed;
  z-index: 15;
  top: 0;
  right: 0;
  display: flex;
  transition-duration: 1s;
  ${({ hidden }) =>
    hidden
      ? { right : "-500px" }
      : { right : "0px"}}

  gap: 30px;
  flex-direction: column;

  width: 350px;
  height: 100vh;

  background-color: #628e85;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const ModalTopStyled = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;

  & p {
    margin: 0;
  }

  button {
    font-size: 2rem;
  }
`;

export const ModalProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 50%;
  margin: 0 auto;
  padding: 1rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ModalPriceStyled = styled(ModalTopStyled)`
  display: flex;
  flex-direction: column;
  height: auto;
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;

    & p {
      margin: 5px;
    }
  }
`;

export const ContainerCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 280px;
  background-color: #273935;
  color: white;

  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 5%;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const CardDescription = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  & div {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      margin: 0;
    }
  }
`;
export const CardQuantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & span {
    background-color: white;
    color: black;
    padding: 5px;
    border-radius: 20%;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
