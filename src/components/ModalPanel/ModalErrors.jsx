import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";

const ModalErrors = ({ show, setShow, msg }) => {
  return (
    <WrapperModalPanel
      valid={show}
      show={show}
      onClick={() => {
        setShow(!show);
      }}
    >
      <ContainerModalPanel>
        <h3>{msg}</h3>
      </ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalErrors;
