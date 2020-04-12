import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [pics, setPics] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(id) {
    const updatedArr = pics.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setPics(updatedArr);
  }

  function addToCart(img) {
    setCartItems((prevItems) => [...prevItems, img]);
  }

  function isInCart(img) {
    return cartItems.some((el) => el.id === img.id);
  }

  function removeFromCart(img) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id));
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPics(data);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ pics, toggleFavorite, addToCart, isInCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
