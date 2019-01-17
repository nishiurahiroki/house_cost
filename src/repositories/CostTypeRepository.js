import firebaseInstance from '../firebase/firebaseInstance.js'

export default class CostTypeRepository {
  static async getTypes(userId) {
    return await firebaseInstance
      .database()
      .ref(`costTypes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
