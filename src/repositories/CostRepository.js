import firebaseInstance from '../firebase/firebaseInstance.js'

export default class CostRepository {
  static async save({date, amont, costId, addUserId}) {
    const saveCount = 1 // TODO dummy code
    return await Promise.resolve(saveCount)
  }

  static async delete(costId) {
    const deleteCount = 1 // TODO dummy code
    return deleteCount
  }

  static async getCosts({year = '', month = '', day = '', costId = ''}) {
    return await Promise.resolve([ // TODO dummy code
      {
        name : '水道光熱費',
        id : '2',
        amount : 12332,
        date : '2018/02/10 10:10'
      },
      {
        name : '通信費',
        id : '3',
        amount : 3422,
        date : '2018/02/10 10:10'
      },
      {
        name : 'その他',
        id : '12',
        amount : 6700,
        date : '2018/02/10 10:10'
      }
    ])
  }
}
