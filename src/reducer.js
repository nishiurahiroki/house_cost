const reducer = (state = {title : ''}, action) => {
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
