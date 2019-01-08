export default class IncomeRepository {
  static async save({date, amount, incomeId}) {
    const saveCount = 1 // TODO dummy code
    return await Promise.resolve(saveCount) // TODO dummy code
  }

  static async delete(incomeId) {
    const deleteCount = 1 // TODO dummy code
    return deleteCount
  }

  static async getIncomes({}) {
    return await Promise.resolve([ // TODO dummy code
      {
        name : '給与・報酬',
        id : '1',
        amount : 123456,
        date : '2018/02/10 10:10'
      },
      {
        name : '公的年金',
        id : '3',
        amount : 5900,
        date : '2018/02/10 10:10'
      },
      {
        name : 'その他収入',
        id : '5',
        amount : 13567,
        date : '2018/02/10 10:10'
      }
    ])
  }
}
