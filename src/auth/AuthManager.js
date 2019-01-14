import firebaseInstance from '../firebase/firebaseInstance.js'

const AUTH_USER_SESSION_KEY = `${document.domain}-user-info`

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
    return localStorage[AUTH_USER_SESSION_KEY]
  }

  static async createUser({id, password}) {
    return await firebaseInstance.auth().createUserWithEmailAndPassword(id, password)
  }
}
