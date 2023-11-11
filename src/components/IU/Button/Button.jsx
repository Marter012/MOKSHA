import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({onClick,children, bg_color, color, padding_set,disabled}) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}  color={color} bg_color={bg_color} padding_set={padding_set}>
        <p>{children}</p>
    </ButtonStyled>
  )
}

export default Button
