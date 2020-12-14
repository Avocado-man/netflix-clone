import React from 'react'
// Styled
import { Button } from '../styles/header'
// Types
import { HeaderButtonProps } from '../Types/Types'

const HeaderButton: React.FC<HeaderButtonProps> = ({
  to,
  children,
  ...restProps
}) => {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  )
}

export default HeaderButton
