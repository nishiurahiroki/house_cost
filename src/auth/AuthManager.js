import firebaseInstance from '../firebase/firebaseInstance.js'

const AUTH_USER_SESSION_KEY = `house-cost-user-info`

const replaceCanNotUseDelimiter = (userId = '') => userId.replace(/\./g, '_')

const localStorage = {}

export default class AuthManager {
  static async auth({id, password}) {
    return await firebaseInstance
      .auth()
      .signInWithEmailAndPassword(id, password)
      .then(() => localStorage[AUTH_USER_SESSION_KEY] = id)
  }

  static async authSignOut() {
    return await firebaseInstance
      .auth()
      .signOut()
      .then(() => localStorage[AUTH_USER_SESSION_KEY] = null)
  }

  static getActiveUserId() {
    return replaceCanNotUseDelimiter(localStorage[AUTH_USER_SESSION_KEY])
  }

  static async createUser({id, password}) {
    return await firebaseInstance.auth().createUserWithEmailAndPassword(id, password)
  }
}
