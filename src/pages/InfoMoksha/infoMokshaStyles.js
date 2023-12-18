import styled from "styled-components";
import { Form } from "../Login/LoginStyles";

export const InfoContainerStyles = styled.div`
  height: auto;
  display: flex;
  background-color: rgb(255, 255, 255, 0.6);

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;
export const InformationContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  font-family: 'Dancing Script', cursive;
  align-items: center;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  p {
    font-size: 4rem;
  }

  span {
    width: 80%;
    font-size: 1.8rem;
    
  }

  @media (max-width: 1000px) {
    width: 100vw;
    img {
      width: 100vw;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 2.5rem;
    }

    span {
      width: 80%;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 450px) {
    p {
      font-size: 3rem;
    }

    span {
      width: 80%;
      font-size: 1.7rem;
    }
  }
`;

export const FormContacto = styled.div`
  margin-top: 90px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
  font-family: 'Dancing Script', cursive;
    font-size: 2.7rem;
  }

  @media (max-width: 1000px) {
    width: 100vw;
    img {
      width: 100vw;
    }
  }
`;

export const FormInfo = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
