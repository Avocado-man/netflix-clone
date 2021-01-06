import React from 'react'
import { useContent } from '../hooks'

const Browse: React.FC = (): JSX.Element => {
  // need the series and the films
  const { series } = useContent('series')
  const { films } = useContent('films')
  // we need slides
  // pass it to the browse container

  return <h1>Browse</h1>
}

export default Browse
