import { useEffect, useState, useContext } from 'react'
// Context
import { FirebaseContext } from '../context/firebase'

const UseContent = (target: string): any => {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot: any) => {
        const allContent = snapshot.docs.map((contentObj: any) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }))
        setContent(allContent)
      })
      .catch((error: any) => {
        console.log(error.message)
      })
  }, [firebase])

  return { [target]: content }
}

export default UseContent
