import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";
import { useNavigate } from "react-router-dom";


const ModalRegister = ({ show, setShow }) => {

  const navigate = useNavigate();

  return (
    <WrapperModalPanel
      valid={show}
      show={show}
      onClick={() => {
        setShow(!show);
        navigate("/products")
      }}
    >
      <ContainerModalPanel>
        <h3>
          Codigo de verificacion enviado, verifica tu cuenta para realizar
          compras.
        </h3>
      </ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalRegister;
