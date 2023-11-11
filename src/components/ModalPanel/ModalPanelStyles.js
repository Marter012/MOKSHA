import styled from "styled-components";

export const WrapperModalPanel = styled.div`
    position: absolute;
    display: ${({ModalHidden}) => ModalHidden ? "none;" : "flex;"};
    justify-content: center;
    top: 0%;
    z-index: +2;
    width: 100vw;
    height: 100vh;
    align-items: center;
    backdrop-filter: blur(4px);
    cursor: pointer;
`

export const ContainerModalPanel = styled.div`
    top: 0%;
    z-index: +2;
    width: 500px;
    height: 200px;
    border-radius: 10px;
    background-color: #9CE3D4;
    display: flex;
    justify-content: center;
    align-items: center;

    h3{
        font-size: 3rem;
    }
`