import firebaseInstance from '../firebase/firebaseInstance.js'

export default class CostTypeRepository {
  static async getTypes() {
    return await Promise.resolve([
      {
        name : '住居費',
        id : '1'
      },
      {
        name : '水道光熱費',
        id : '2'
      },
      {
        name : '通信費',
        id : '3'
      },
      {
        name : '保険',
        id : '4'
      },
      {
        name : '教育(習い事)',
        id : '5'
      },
      {
        name : '医療費',
        id : '6'
      },
      {
        name : '日用品',
        id : '7'
      },
      {
        name : '食費',
        id : '8'
      },
      {
        name : '被服費',
        id : '9'
      },
      {
        name : '小遣い',
        id : '10'
      },
      {
        name : '交際費',
        id : '11'
      },
      {
        name : 'その他',
        id : '12'
      }
    ])
  }
}
