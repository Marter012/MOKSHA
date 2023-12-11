import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";
import { useNavigate } from "react-router-dom";

const ModalGeneric = ({ show, setShow, msg , redirecTo = "products" }) => {

  const navigate = useNavigate();

  return (
    <WrapperModalPanel
      valid={show}
      show={show}
      onClick={() => {
        setShow(!show);
        navigate(`/${redirecTo}`);
      }}
    >
      <ContainerModalPanel>
        <h3>{msg}</h3>
      </ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalGeneric;
