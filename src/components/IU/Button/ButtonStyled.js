import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonStyled = styled(motion.button)`
    display: flex;
    padding: ${({padding_set})=> padding_set ? padding_set : "0.5rem 1rem"};
    align-items: center;
    border: none;
    border-radius: 10%;
    text-transform: uppercase;
    font-weight: 800;
    color : ${({color})=> color ? color : "black"} !important;
    background-color: ${({bg_color})=> bg_color ? bg_color : "transparent"} !important;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
  }
  p{
    margin: 0px;

  }
`;
