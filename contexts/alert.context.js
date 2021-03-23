import React, { createContext, useReducer } from "react";
import AlertReducer from "reducers/alert.reducer";

export const AlertContext = createContext();

export const AlertDispatch = createContext();

export const AlertProvider = (props) => {
   const [state, dispatch] = useReducer(AlertReducer, { show: false });
   return (
      <AlertContext.Provider value={state}>
         <AlertDispatch.Provider value={dispatch}>
            {props.children}
         </AlertDispatch.Provider>
      </AlertContext.Provider>
   );
};
