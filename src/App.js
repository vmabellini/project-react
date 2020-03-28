import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      <Switch>
        <route exact path="/">
          <Photos />
        </route>
        <route path="/cart">
          <Cart />
        </route>
      </Switch>
    </div>
  );
}

export default App;
