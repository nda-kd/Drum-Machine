import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initState = {
  display: "",
  keyPressed: false ,
  switchIsOn: true,
  volume: 50,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <Contex.Provider value={[state, dispatch]}>{children}</Contex.Provider>
  );
};

export const Contex = createContext(initState);
export default Store;
