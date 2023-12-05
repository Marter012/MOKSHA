import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";

const ModalRegister = ({show ,setShow}) => {

  return (
    <WrapperModalPanel
      show={show}
      onClick={() => {
        setShow(!show);
      }}
    >
      <ContainerModalPanel><h3>Codigo de verificacion enviado, verifica tu cuenta para realizar compras.</h3></ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalRegister;
