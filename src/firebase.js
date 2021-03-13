import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB-BcJ634Lnr97ueIYPLaNKJy4mTyAldFs',
  authDomain: 'facebook-clone-c677b.firebaseapp.com',
  projectId: 'facebook-clone-c677b',
  storageBucket: 'facebook-clone-c677b.appspot.com',
  messagingSenderId: '136477535763',
  appId: '1:136477535763:web:e4ee1e4e276c2bcd09d9e6',
  measurementId: 'G-R2HC90FEZJ',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
