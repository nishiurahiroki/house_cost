import initialState from './store'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ChangeTitle':
      return {
        ...state,
        title : action.title
      }
    case 'ShowCostAndIncomeList':
      let {costs, incomes} = action
      costs = costs.map(cost => {
        cost.isCost = true
        return cost
      })
      return {
        ...state,
        costAndIncomeList : [...costs, ...incomes]
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
