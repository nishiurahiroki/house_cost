export default class IncomeRepository {
  static async save({date, amount, incomeId}) {
    const saveCount = 1 // TODO dummy code
    return await Promise.resolve(saveCount) // TODO dummy code
  }

  static async getIncomes({}) {
    return await Promise.resolve([ // TODO dummy code
      {
        name : '給与・報酬',
        id : '1',
        amount : 123456
      },
      {
        name : '公的年金',
        id : '3',
        amount : 5900
      },
      {
        name : 'その他収入',
        id : '5',
        amount : 13567
      }
    ])
  }
}
