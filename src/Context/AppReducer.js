export default (state, action) => {
  switch (action.type) {
    case "GET_SESSION":
      return {
        ...state,
        session: [action.payload, ...state.session],
      };
      default: return state
  }
};
