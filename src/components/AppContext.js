import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(response => response.json())
      .then(data => {
        setPics(data);
      });
  }, []);

  return <AppContext.Provider value={{ pics }}>{children}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
