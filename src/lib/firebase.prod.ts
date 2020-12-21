import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyDBbBxGYkwYt6ODOm-wmOVXH8lnJBpL_9k',
  authDomain: 'netflix-clone-408d8.firebaseapp.com',
  databaseURL: 'https://netflix-clone-408d8.firebaseio.com',
  projectId: 'netflix-clone-408d8',
  storageBucket: 'netflix-clone-408d8.appspot.com',
  messagingSenderId: '1060516719119',
  appId: '1:1060516719119:web:3317f9d62a109d98b7d17a',
}
const firebase = Firebase.initializeApp(config)

seedDatabase(firebase)

export { firebase }
