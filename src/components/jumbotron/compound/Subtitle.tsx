import React from 'react'
// Styled
import { SubTitle } from '../styles/jumbotron'

export const JumbotronSubTitle: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
