import styled from "styled-components";

export const FoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: calc(100vh - 70px);
  gap: 5rem;

  img {
    width: 40%;
  }
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: center;
  align-items: center;

  h1 {
    margin: 0;
  }

  p{
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
