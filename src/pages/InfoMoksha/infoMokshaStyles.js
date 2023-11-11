import styled from "styled-components";
import { Form } from "../Login/LoginStyles";

export const InfoContainerStyles = styled.div`
  height: auto;
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
`;
export const InformationContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  p {
    font-size: 3rem;
  }

  span {
    width: 80%;
    font-size: 1.5rem;
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
`;

export const FormContacto = styled.div`
  margin-top: 90px;
  width: 50%;
  text-align: center;
  align-items: center;

  h3 {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    width: 100vw;
    img {
      width: 100vw;
    }
  }
`;

export const FormInfo = styled(Form)`
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
