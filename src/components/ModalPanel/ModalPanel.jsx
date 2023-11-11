import React from "react";
import { ContainerModalPanel, WrapperModalPanel } from "./ModalPanelStyles";

const ModalPanel = ({children,ModalHidden,onClick}) => {
  return (
    <WrapperModalPanel onClick={onClick} ModalHidden={ModalHidden}>
      <ContainerModalPanel>{children}</ContainerModalPanel>
    </WrapperModalPanel>
  );
};

export default ModalPanel;
