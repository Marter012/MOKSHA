import styled from "styled-components";

export const BoxLoaderStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  font-size: 30px;
`;

export const LoaderStyles = styled.div`
  animation: loader-37 800ms linear infinite;
  &:before,
  &:after {
    content: "";
    width: 0.8em;
    height: 0.8em;
    display: block;
    position: absolute;
    top: calc(50% - 0.4em);
    left: calc(50% - 0.4em);
    border-left: 0.08em solid currentcolor;
    border-radius: 100%;
    animation: loader-37 400ms linear infinite reverse;
  }
  &:after {
    width: 0.6em;
    height: 0.6em;
    top: calc(50% - 0.3em);
    left: calc(50% - 0.3em);
    border: 0;
    border-right: 0.05em solid currentcolor;
    animation: none;
  }

  @keyframes loader-37 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
