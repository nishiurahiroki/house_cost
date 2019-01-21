import initialState from './store'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ChangeTitle':
      return {
        ...state,
        title : action.title
      }
    case 'ShowCostAndIncomeList':
      let {costs, incomes, orderBy = 'date', sort = 'desc'} = action

      const sortList = {
        asc : (a, b) => (a[orderBy] > b[orderBy] ? 1 : -1),
        desc : (a, b) => (a[orderBy] < b[orderBy] ? 1 : -1)
      }

      costs = costs.map(cost => {
        cost.isCost = true
        return cost
      })

      const costAndIncomeList = [...costs, ...incomes].sort(sortList[sort])
      return {
        ...state,
        costAndIncomeList
      }
    case 'ShowMessage' :
      return {
        ...state,
        isShowMessage : true,
        messageText : action.messageText
      }
    case 'HideMessage' :
      return {
        ...state,
        isShowMessage : false,
        messageText : ''
      }
    case 'SetActiveUserId' :
      return {
        ...state,
        activeAuthUserId : action.activeAuthUserId
      }
    default:
      return state
  }
}

export default reducer
