import React, { useContext, useEffect, useState } from 'react'
// Types
import { BrowseContainerProps } from './Types'
// Container
import SelectProfileContainer from './profiles'
// Context
import { FirebaseContext } from '../context/firebase'

const BrowseContainer: React.FC<BrowseContainerProps> = ({
  slides,
}): JSX.Element => {
  const [profile, setProfile] = useState({
    displayName: '',
    photoURL: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  return <SelectProfileContainer user={user} setProfile={setProfile} />
}

export default BrowseContainer
