import styled from "styled-components";

export const WrapperModalPanel = styled.div`
  position: fixed;
  display: ${({ show }) => (show ? "flex;" : "none;")};
  justify-content: center;
  top: 0%;
  z-index: +100;
  width: 100vw;
  height: 100vh;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(4px);

  ${({ show }) =>
    show
      ? {
          transform: "scaleY(0.01) scaleX(0);",
          animation: "unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;",
        }
      : {
          transform: "scale(1);",
          animation:
            "unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;",
        }}

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }

  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }
`;

export const ContainerModalPanel = styled.div`
  top: 0%;
  width: 100vw;
  height: 200px;
  border-radius: 10px;
  background-color: #9ce3d4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 1px black;

  h3 {
    font-size: 2rem;
  }
`;
