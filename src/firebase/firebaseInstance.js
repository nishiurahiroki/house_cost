import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import config from './firebaseConfig.js'

firebase.initializeApp(config)

export default firebase
