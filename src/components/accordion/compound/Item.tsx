import React, { createContext, useContext, useState } from 'react'
// Types
import { IToggleContext } from '../types/Types'
// Styled
import { Item } from '../styles/accordion'

export const ToggleContext = createContext<IToggleContext | null>(null)

export const useMyCtx = () => {
  const value = useContext(ToggleContext)
  if (value === null) throw new Error('Error Context')
  return value
}
export const AccordionItem: React.FC = ({
  children,
  ...restProps
}): JSX.Element => {
  const [toggleShow, setToggleShow] = useState<boolean>(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}
