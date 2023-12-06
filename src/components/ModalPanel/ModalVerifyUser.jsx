import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";

const ModalVerifyUser = ({show ,setShow}) => {

  return (
    <WrapperModalPanel
      show={show}
      onClick={() => {
        setShow(!show);
      }}
    >
      <ContainerModalPanel><h3>Verificacion Exitosa, ya podes realizar compras.</h3></ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalVerifyUser;
