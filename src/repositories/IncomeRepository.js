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

  static async delete(incomeId) {
    const deleteCount = 1 // TODO dummy code
    return deleteCount
  }

  static async getIncomes({year = '', month = '', day = '', incomeId = '', userId}) {
    return await await firebaseInstance
      .database()
      .ref(`incomes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val())
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))
  }
}
