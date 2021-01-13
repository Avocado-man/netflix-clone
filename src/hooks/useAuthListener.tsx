import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

const UseAuthListener = (): any => {
  const userJSON = localStorage.getItem('authUser')
  const currentUser = userJSON !== null ? JSON.parse(userJSON) : ''
  const [user, setUser] = useState(currentUser)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })
    return (): void => listener()
  }, [firebase])

  return { user }
}

export default UseAuthListener
