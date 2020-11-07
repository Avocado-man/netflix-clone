import React from 'react'
// Styled
import { Container } from './styles/opt-form'
// Compound
import {
  OptFormInput,
  OptFormButton,
  OptFormText,
  OptFormBreak,
} from './compound'
// Types
import { InputProps } from './types/Types'

interface IOptFormComposition {
  Input: React.FC<InputProps>
  Button: React.FC
  Text: React.FC
  Break: React.FC
}

const OptForm: React.FC & IOptFormComposition = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Input = OptFormInput
OptForm.Button = OptFormButton
OptForm.Text = OptFormText
OptForm.Break = OptFormBreak

export default OptForm
