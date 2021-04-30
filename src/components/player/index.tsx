import React, { useState, createContext } from 'react'
import { Container } from './styles/player'
import { PlayerVideoProps } from './types/Types'
import { PlayerButton, PlayerVideo } from './compound'

const contextDefaultValue = {
  showPlayer: false,
  setShowPlayer: (e: any): void => console.log(e),
}

export const PlayerContext = createContext(contextDefaultValue)

interface IPlayerComposition {
  Button: React.FC
  Video: React.FC<PlayerVideoProps>
}

const Player: React.FC & IPlayerComposition = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Button = PlayerButton
Player.Video = PlayerVideo

export default Player
