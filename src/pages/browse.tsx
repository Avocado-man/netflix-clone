import React from 'react'
// Hooks
import { useContent } from '../hooks'
// Filter Function
import { selectionFilter } from '../utils/selectionFilter'
// Container
import BrowseContainer from '../containers/browse'

const Browse: React.FC = (): JSX.Element => {
  // need the series and the films
  const { series } = useContent('series')
  const { films } = useContent('films')
  // we need slides
  const slides = selectionFilter({ series, films })
  // pass it to the browse container
  return <BrowseContainer slides={slides} />
}

export default Browse
