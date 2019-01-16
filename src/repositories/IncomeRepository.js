import firebaseInstance from '../firebase/firebaseInstance.js'

export default class IncomeRepository {
  static async save({date, amount, incomeId, addUserId}) {
    return await firebaseInstance
      .database()
      .ref(`incomes/${addUserId}`)
      .push({
        date,
        amount,
        id : incomeId
      })
  }

  static async delete(key, userId) {
    return await firebaseInstance
      .database()
      .ref(`incomes/${userId}`)
      .child(key)
      .remove()
  }

  static async getIncomes({year = '', month = '', day = '', incomeId = '', userId}) {
    return await await firebaseInstance
      .database()
      .ref(`incomes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
