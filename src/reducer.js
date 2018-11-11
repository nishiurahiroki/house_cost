const reducer = (state, action) => {
  switch(action.type) {
    case 'ChangeTitle':
      console.log(action.title);
      return {
        ...state,
        title : action.title
      }
  }
}

export default reducer
