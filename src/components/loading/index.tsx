import React from 'react'
import { Spinner, LockBody, Picture } from './styles/loading'
// Compound
import LoadingReleaseBody from './compound/ReleaseBody'
import { LoadingProps } from './Types/Types'

export interface ILoadingComposition {
  ReleaseBody: React.FC
}

const Loading: React.FC<LoadingProps> & ILoadingComposition = ({
  src,
  ...restProps
}): JSX.Element => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

export default Loading

Loading.ReleaseBody = LoadingReleaseBody
