import firebaseInstance from '../firebase/firebaseInstance.js'

export default class AuthManager {
  static async auth({id, password}) {
    return await firebaseInstance.auth().signInWithEmailAndPassword(id, password)
  }

  static async authSignOut() {
    return await firebaseInstance.auth().signOut()
  }

  static async getActiveUserInfo() {
    return new Promise((resolve, reject) => {
      firebaseInstance.auth().onAuthStateChanged(user => resolve(user))
    })
  }

  static async createUser({id, password}) {
    return await firebaseInstance.auth().createUserWithEmailAndPassword(id, password)
  }
}
