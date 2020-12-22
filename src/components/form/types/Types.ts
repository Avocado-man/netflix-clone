import React from 'react'

export type LinkProps = {
  to: string
}

export type BaseProps = {
  onSubmit: any
  method: string
}

export type SubmitProps = {
  disabled: boolean
  type: 'button' | 'submit' | 'reset' | undefined
}

export type InputProps = {
  placeholder: string
  value: string
  onChange: any
  type?: string
  autoComplete?: string
}

export interface IFormComposition {
  Base: React.FC<BaseProps>
  Error: React.FC
  Input: React.FC<InputProps>
  Link: React.FC<LinkProps>
  Submit: React.FC<SubmitProps>
  Text: React.FC
  TextSmall: React.FC
  Title: React.FC
}
