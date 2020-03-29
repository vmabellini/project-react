import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [pics, setPics] = useState([]);

  function toggleFavorite(id) {
    const updatedArr = pics.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        };
      }
      return photo;
    });

    setPics(updatedArr);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(response => response.json())
      .then(data => {
        setPics(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ pics, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
