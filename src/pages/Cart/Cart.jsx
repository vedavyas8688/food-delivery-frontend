import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const Navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-item-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}>X</p>
                </div>

                <hr />
              </>
            );
          }
          return null;
        })}
      </div>

<div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Total</h2>
    <div>
      <hr />
      <div className="cart-total-details">
        <p>SubTotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>${getTotalCartAmount() === 0 ? 0 :2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total</b>
        <b>${getTotalCartAmount() === 0 ?0 :   getTotalCartAmount()  + 2}</b>
      </div>
    </div>
    <button onClick={ () => Navigate('/Order')}>PROCEED TO CHECKOUT</button>
  </div>

  <div className="cart-promocode">
    <p>If You Have a Promo Code, Enter It Here</p>
    <div className="cart-promocode-input">
      <input type="text" placeholder="promocode" />
      <button>Submit</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Cart;
