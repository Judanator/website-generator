export default (state, action) => {
  switch (action.type) {
    case "ADD_USERDATA":
      return {
        ...state,
        userData: [action.payload, ...state.userData],
      };
      default: return state
  }
};
