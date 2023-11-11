import styled from "styled-components";

export const NavProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;

  button:hover {
    background-color: #628e85;
  }
`;

export const NavButton = styled.button`
  width: 100%;  
  background-color: ${({ active }) => (active ? "#7FB8AC;" : "transparent;")};
  text-decoration: none;
  border: none;
  cursor: pointer;
  border: 1px dashed grey;
  border-top: none;
  
  
`;
