import React from 'react'
// Styled
import { Title } from '../styles/accordion'

export const AccordionTitle: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Title {...restProps}>{children}</Title>
}
