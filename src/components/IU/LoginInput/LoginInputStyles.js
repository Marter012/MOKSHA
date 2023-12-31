import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
`;

export const LoginInputStyled = styled.input`
  width: 200px;
  background-color: #9CE3D4;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: black;
  color: black;
  border-right: 5px solid black;
  border-left: 5px solid black;
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  display: flex;
  font-size: 14px;
  align-items: center;
`;
