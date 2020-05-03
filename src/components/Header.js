import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

function Header() {
  const { cartHasItems } = useContext(AppContext);

  function cartIcon() {
    if (cartHasItems()) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    }
  }

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">{cartIcon()}</Link>
    </header>
  );
}

export default Header;
