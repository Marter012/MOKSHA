import styled from "styled-components";

export const HeroContainerStyles = styled.div`
    display: flex;
    height: calc(100vh);
    justify-content: end;
    align-items: center;

    & div{
        z-index: +2;
        width: 600px;        
        height: 100%;
        text-align: center;
        font-size: 2rem;
        background-color: rgb(55,55,55,0.5);
        display: flex;
        align-items: center;
        color: white;
    }
    & img{
        top: 0;
        position: absolute;
        z-index: +1;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media(max-width : 1100px){
        div{
            width: 400px;
            font-size: 1.5rem;
        }
    }
    @media(max-width : 730px){
        div{
            width: 100%;
        }
    }
`