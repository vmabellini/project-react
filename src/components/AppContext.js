import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [pics, setPics] = useState([]);

  return <AppContext.Provider value={pics}>{{ children }}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
