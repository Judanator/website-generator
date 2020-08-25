export default (state, action) => {
  switch (action.type) {
    case "GET_SESSION":
      return {
        ...state,
        session: [action.payload, ...state.session],
      };

    case "ADD_FORM":
      return {
        ...state,
        form: [action.payload, ...state.form],
      };
      default: return state
  }
};
