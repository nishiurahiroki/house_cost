import initialState from './store'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ChangeTitle':
      return {
        ...state,
        title : action.title
      }
    default:
      return state
  }
}

export default reducer
