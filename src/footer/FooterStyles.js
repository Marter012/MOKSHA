import styled from "styled-components";

export const FooterContainerStyles = styled.div`
  width: 100%;
  height: 70px;
  background-color: #154c40;
  color: white;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid black;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    justify-content: space-evenly;
    list-style: none;
    margin: 0px;
    align-items: center;
  }
  li {
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    li{
      font-size: 1rem;
    }
  }

  @media (max-width: 650px) {
    li{
      font-size: 0.8rem;
    }
}
`;

export const LinksStyles = styled.a`
  font-size: 1.8rem;
  border-radius: 50%;
  color: white;

  :hover{
    color: ${({ fontColor }) =>
      fontColor ? fontColor : "white"};
  }

  @media (max-width: 650px) {
    
      font-size: 1.5rem;
    
  }
  @media (max-width: 500px) {
    
    font-size: 1rem;
  
}
`;
