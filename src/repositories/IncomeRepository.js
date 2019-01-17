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
    const incomeTypes = await firebaseInstance
      .database()
      .ref(`incomeTypes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))

    return await firebaseInstance
      .database()
      .ref(`incomes/${userId}`)
      .once('value')
      .then(snapshot => {
        const incomes = snapshot.val()
        if(!incomes) {
          return []
        }

        return Object
          .entries(incomes)
          .map(([key, value]) => ({key, ...value}))
          .map(cost => {
            return {
              ...cost,
              name : incomeTypes.find(type => cost.id == type.id).name
            }
          })
      })
  }
}
