import React, { createContext, useState } from "react";

const initialState = {
  // mapsKey: REACT_APP_MAPS_API_KEY,
  endPoint: "http://localhost:8000/api",
};

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [globalSate, setGlobalState] = useState(initialState);
  return (
    <GlobalContext.Provider value={[globalSate, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
