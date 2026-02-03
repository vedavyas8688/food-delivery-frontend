 import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext"; // ADDED IMPORT
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  // FIXED: Added StoreContext parameter
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {/* FIXED: Changed !cartItems[id] === 0 to !cartItems[id] */}
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)} // FIXED: Added arrow function
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)} // FIXED: Added arrow function
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add"
              onClick={() => addToCart(id)} // FIXED: Added arrow function
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;