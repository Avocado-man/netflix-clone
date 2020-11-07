import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import FaqsContainer from '../containers/faqs'
import FooterContainer from '../containers/footer'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home
