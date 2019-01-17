import firebaseInstance from '../firebase/firebaseInstance.js'

export default class IncomeTypeRepository {
  static async getTypes(userId) {
    return await firebaseInstance
      .database()
      .ref(`incomeTypes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
