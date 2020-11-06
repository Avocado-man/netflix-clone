import React from 'react'
// Styled
import { Body } from '../styles/accordion'
// Context
import { useMyCtx } from './Item'

export const AccordionBody: React.FC = ({ children, ...restProps }) => {
  const { toggleShow } = useMyCtx()
  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
