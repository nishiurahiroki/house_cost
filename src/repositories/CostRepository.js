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

  static async delete(costId) {
    const deleteCount = 1 // TODO dummy code
    return deleteCount
  }

  static async getCosts({year = '', month = '', day = '', costId = '', userId}) {
    return await firebaseInstance
      .database()
      .ref(`costs/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val())
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
