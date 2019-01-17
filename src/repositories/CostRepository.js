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
    const costTypes = await firebaseInstance
      .database()
      .ref(`costTypes/${userId}`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(datas => Object.entries(datas).map(([key, value]) => ({key, ...value})))

    return await firebaseInstance
      .database()
      .ref(`costs/${userId}`)
      .once('value')
      .then(snapshot => {
        const costs = snapshot.val()
        if(!costs) {
          return []
        }

        return Object
          .entries(costs)
          .map(([key, value]) => ({key, ...value}))
          .map(cost => {
            return {
              ...cost,
              name : costTypes.find(type => cost.id == type.id).name
            }
          })
      })
  }
}
