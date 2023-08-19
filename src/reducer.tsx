const reducer = (state = 15, action: any) => {

  switch (action.type) {
    case 'INC':
      console.log(state);
      return state + 1;
    case 'DEC':
      console.log(state);
      return state - 1;
    case 'RND':
      return state + action.payload;

    default:
      return state;
  }
}

export default reducer;