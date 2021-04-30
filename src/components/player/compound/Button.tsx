import React, { useContext } from 'react'
import { PlayerContext } from '../index'
import { Button } from '../styles/player'

const PlayerButton: React.FC = ({ ...restProps }) => {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button
      {...restProps}
      onClick={(): void => setShowPlayer((prev: boolean) => !prev)}
    >
      Play
    </Button>
  )
}

export default PlayerButton
