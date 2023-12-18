import styled from "styled-components";
import { Form } from "../Login/LoginStyles";

export const InfoContainerStyles = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255, 0.6);
  margin-top : 100px;
  img {
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width : 1000px) {
    display: block;
  }
`;
export const InformationContainer = styled.div`
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
    width: 70%;
    font-size: 1.8rem;
    
  }

  @media (max-width: 1050px) {
    width: 100vw;
    p {
      font-size: 2rem;
    }
    span {
      font-size: 1.4rem;
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
  width: 100%;
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
