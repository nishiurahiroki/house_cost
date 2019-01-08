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
    default:
      return state
  }
}

export default reducer
