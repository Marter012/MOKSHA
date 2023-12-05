import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";

const ModalBuy = ({ show,setShow }) => {
  
  return (
    <WrapperModalPanel
      show={show}
      onClick={() => {
          setShow(!show);
      }}
    >
      <ContainerModalPanel><h3>Pedido Confirmado</h3></ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalBuy;
