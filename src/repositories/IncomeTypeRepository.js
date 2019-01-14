import firebaseInstance from '../firebase/firebaseInstance.js'

export default class IncomeTypeRepository {
  static async getTypes() {
    return await Promise.resolve([ // TODO dummy code.
      {
        id : '1',
        name : '給与・報酬'
      },
      {
        id : '2',
        name : '児童手当等'
      },
      {
        id : '3',
        name : '公的年金'
      },
      {
        id : '4',
        name : '私的年金'
      },
      {
        id : '5',
        name : 'その他収入'
      }
    ])
  }
}
