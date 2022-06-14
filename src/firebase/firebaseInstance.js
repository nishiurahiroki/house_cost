import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import config from './firebaseConfig.js'

const app = initializeApp(config)

export default app
