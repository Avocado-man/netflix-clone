import React, { useContext, useEffect, useState } from 'react'
// Types
import { BrowseContainerProps } from './Types'
// Container
import SelectProfileContainer from './profiles'
// Context
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'

const BrowseContainer: React.FC<BrowseContainerProps> = ({ slides }) => {
  const [profile, setProfile] = useState({
    displayName: '',
    photoURL: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile, profile.displayName])

  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <p>Hello</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
