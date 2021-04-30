import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { PlayerContext } from '../index'
import { PlayerVideoProps } from '../types/Types'
import { Overlay, Inner, Close } from '../styles/player'

const PlayerVideo: React.FC<PlayerVideoProps> = ({ src }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
  return showPlayer
    ? createPortal(
        <Overlay onClick={(): void => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <track kind="captions" />
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

export default PlayerVideo
