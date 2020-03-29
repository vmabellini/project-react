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

  function isFavorited(id) {
    const pic = pics.find(item => item.id === id);
    return pic.isFavorite;
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
    <AppContext.Provider value={{ pics, toggleFavorite, isFavorited }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
