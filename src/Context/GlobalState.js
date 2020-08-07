// import React, { createContext, useReducer, useEffect, useState } from "react";
// import axios from "axios";
// import AppReducer from "./AppReducer";

// const initialState = {  
//   loggedIn: "",
//   userData: "",
//   websites: [
//       {businessName: "",
//        businessDomain: "",
//        phoneNumber: "",
//        businessType: "",
//        businessMission: "",
//        user: ""
//       }
//   ]
// };

// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   ///////////////////     ACTIONS    /////////////////////////
// //   function addForm(formData) {
// //     dispatch({
// //         type: 'ADD_FORM',
// //         payload: formData
// //     })
// //   }

//   function addUserData(user) {
//     dispatch({
//         type: 'ADD_USERDATA',
//         payload: user
//     })
// }

//   return (
//     <GlobalContext.Provider
//       value={{
//         userData: state.userData,
//         loggedIn: state.loggedIn,
//         addUserData
//       }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
