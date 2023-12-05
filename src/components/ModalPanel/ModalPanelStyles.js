import styled from "styled-components";

export const WrapperModalPanel = styled.div`
    position: fixed;
    display: ${({show}) => show ? "flex;" : "none;"};
    justify-content: center;
    top: 0%;
    z-index: +100;
    width: 100vw;
    height: 100vh;
    align-items: center;
    backdrop-filter: blur(4px);
    cursor: pointer;
`


export const ContainerModalPanel = styled.div`
    top: 0%;
    width: 100vw;
    height: 200px;
    border-radius: 10px;
    background-color: #9CE3D4;
    display: flex;
    justify-content: center;
    align-items: center;

    h3{
        font-size: 2rem;
    }
`