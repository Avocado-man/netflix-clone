import React from 'react'
import { Container } from './styles/form'
// Types
import { IFormComposition } from './types/Types'
// Compound
import {
  FormBase,
  FormError,
  FormInput,
  FormLink,
  FormSubmit,
  FormText,
  FormTextSmall,
  FormTitle,
} from './compound'

const Form: React.FC & IFormComposition = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}

Form.Base = FormBase
Form.Error = FormError
Form.Input = FormInput
Form.Link = FormLink
Form.Submit = FormSubmit
Form.Text = FormText
Form.TextSmall = FormTextSmall
Form.Title = FormTitle

export default Form
