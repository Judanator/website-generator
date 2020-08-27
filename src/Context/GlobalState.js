import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  session: "",
  form: ""
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  ///////////////////     ACTIONS    /////////////////////////
  function addForm(formData) {
    dispatch({
      type: "ADD_FORM",
      payload: formData,
    });
  }

  function getSession(session) {
    dispatch({
      type: "GET_SESSION",
      payload: session,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        session: state.session,
        form: state.form,
        getSession,
        addForm,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
