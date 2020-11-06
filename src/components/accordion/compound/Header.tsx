import React from 'react'
// Context
import { useMyCtx } from './Item'
// Styled
import { Header } from '../styles/accordion'

export const AccordionHeader: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  const { toggleShow, setToggleShow } = useMyCtx()
  return (
    <Header onClick={(): void => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}
