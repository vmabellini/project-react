import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { removeFromCart } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);

  const trashBinClassName = hovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashBinClassName}
        onClick={() => removeFromCart(item)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
