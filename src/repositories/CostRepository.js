import firebaseInstance from '../firebase/firebaseInstance.js'

export default class CostRepository {
  static async save({date, amount, costId, addUserId}) {
    return await firebaseInstance
      .database()
      .ref(`costs/${addUserId}`)
      .push({
        date,
        amount,
        id : costId
      })
  }

  static async delete(key, userId) {
    return await firebaseInstance
      .database()
      .ref(`costs/${userId}`)
      .child(key)
      .remove()
  }

  static async getCosts({year = '', month = '', day = '', costId = '', userId}) {
    return await firebaseInstance
      .database()
      .ref(`costs/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
