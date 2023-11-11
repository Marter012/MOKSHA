import styled from "styled-components";

export const WrappetContainerProducts = styled.div`
  margin-top: 90px;

`

export const ProductsContainerStyles = styled.div`
  background: linear-gradient(#4CCCB1,#237C69);
  padding: 3rem;
  width: calc(100vw -3rem);
  min-height : 700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;

  @media(max-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
