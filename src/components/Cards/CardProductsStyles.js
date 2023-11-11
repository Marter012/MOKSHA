import styled from "styled-components";

export const CardContainerProducts = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 400px;
  border: 1px dashed black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  text-align: center;
  align-items: center;
  background-color: white;
  overflow: hidden;


  @media(max-width: 400px){
    width: 250px;
  }
`;
export const CardProductsImg = styled.div`
  background-color: white;
  width: 300px;

  height: 400px;
  margin-bottom: 5px;

  overflow: hidden;
  img {
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const CardProductsDescription = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid black;
  div {
    h3 {
      margin: 0;
      font-size: 2rem;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;
export const CardProductsAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5px;
  span {
    font-size: 1.4rem;
  }
`;
