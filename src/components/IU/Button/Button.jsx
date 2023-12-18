import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({onClick,children, bg_color, color, padding_set,disabled, active_bg}) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}  color={color} bg_color={bg_color} padding_set={padding_set} active_bg={active_bg}>
        <p>{children}</p>
    </ButtonStyled>
  )
}

export default Button
