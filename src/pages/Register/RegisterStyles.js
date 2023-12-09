import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const RegisterWrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - (170px));
  display: flex;
  margin-top: 100px;
  justify-content: center;
  `;

export const ContainerRegister = styled.div`
  height: 450px;
  text-align: center;
  display: flex;
  width: 80%;
  overflow: hidden;
  background-color: #154c40;
  box-shadow: 5px 5px 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  img {
    box-shadow: 5px 5px 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 40%;
    height: 90%;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    img {
      width: 30%;
    }
  }
  @media (max-width: 860px) {
    img {
      display: none;
    }
  }
`;

export const ContainerFormRegister = styled.div`
  width: 50%;
  height: 90%;
  box-shadow: 5px 5px 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 860px) {
    width: 80%;
  border-radius: 20px;

  }

  @media (max-width: 550px) {
    
    input{
      width: 200px;
    }
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 10px;
  input {
    padding: 0.5rem 0.5rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
