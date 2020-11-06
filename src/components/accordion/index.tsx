import React from 'react'
// Styled
import { Container, Inner } from './styles/accordion'
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  AccordionTitle,
} from './compound'

interface IAccordionComposition {
  Body: React.FC
  Header: React.FC
  Item: React.FC
  Title: React.FC
}

const Accordion: React.FC & IAccordionComposition = ({
  children,
  ...restProps
}): JSX.Element => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Body = AccordionBody
Accordion.Header = AccordionHeader
Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle

export default Accordion
