import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 500px;
  height: 400px;  

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export const SliderImages = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 20px;
  border: 2px solid black;
  overflow: hidden;
  background-color: red;
  box-shadow: -5px -5px 30px 5px #9ce3d4, 5px 5px 30px 5px #9c9c9c;
  ul,
  li {
    padding: 0;
    list-style: none;
    white-space: nowrap;
    height: 100%;
  }

  li {
    display: inline;
  }

  img {
    object-fit: cover;
    margin-top: -16px;
    height: 100%;
    width : 500px;
    height : 280; 
  }
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 8px 3px;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
  }
`;
