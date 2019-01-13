import firebase from 'firebase/app'
import 'firebase/auth'

import config from './firebaseConfig.js'

firebase.initializeApp(config)

export default firebase
