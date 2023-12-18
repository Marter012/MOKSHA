import styled from "styled-components";

export const ButtonSubmitStyled = styled.button`
  width: 200px;
  min-height: 30px;
  padding: 1rem 1.5rem;
  background-color: #217664;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;
