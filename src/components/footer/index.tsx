import React from 'react'
// Styled
import { Container } from './styles/footer'
// Compound
import {
  FooterBreak,
  FooterLink,
  FooterRow,
  FooterColumn,
  FooterText,
  FooterTitle,
} from './compound'
// Types
import { LinkProps } from './types/Types'

interface IFooterComposition {
  Break: React.FC
  Column: React.FC
  Link: React.FC<LinkProps>
  Row: React.FC
  Text: React.FC
  Title: React.FC
}

const Footer: React.FC & IFooterComposition = ({
  children,
  ...restProps
}): JSX.Element => {
  return <Container {...restProps}>{children}</Container>
}

Footer.Break = FooterBreak
Footer.Column = FooterColumn
Footer.Row = FooterRow
Footer.Text = FooterText
Footer.Link = FooterLink
Footer.Title = FooterTitle

export default Footer
