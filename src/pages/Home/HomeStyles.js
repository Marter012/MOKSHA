import styled from "styled-components";

export const HomeContainerStyles = styled.div`
  height: auto;
`;
export const DescriptionContainer = styled.div`
  width: 100vw;
  height: calc(700px);
  display: flex;
  text-align: center;
  align-items: center;
  section {
    background-color: #1A4F46;
    display: flex;
    justify-content: space-around;
    border-left: 1px dashed black;
    border-right: 1px dashed black;
    width: 100%;
    height: 300px;
    color: white;
  }

  div {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: 2.5rem;
  }
  span {
    font-size: 1.5rem;
  }

  @media (max-width: 900px) {
    p {
      font-size: 1.7rem;
    }
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 450px) {
    display: block;
    height: auto;
    section{
    border: 1px dashed black;

    }
  }

`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  div {
    display: flex;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  p {
    font-size: 3rem;
  }

  span {
    width: 80%;
    font-size: 1.5rem;
  }
`;

export const SectionSlider = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(173, 232, 219, 0.3);

  @media(max-width: 400px){
    padding: 0px;
  }
`;

export const SliderInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 80%;
  }

  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
  }

  @media (max-width: 1150px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const SliderInfoButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
