import React from 'react'
// Components
import { Accordion } from '../components'
// Data
import faqsData from '../fixtures/faqs.json'

const FaqsContainer = (): JSX.Element => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(({ id, header, body }) => (
        <Accordion.Item key={id}>
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default FaqsContainer
