import React from 'react'
// Styled
import { Button } from '../styles/opt-form'

const OptFormButton: React.FC = ({ children, ...restProps }): JSX.Element => {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  )
}

export default OptFormButton
