import React from "react";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
export default function SideBar({
  isOpen,
  setIsOpen,
  cart,
  onRemoveFromCart,
  onClearCart,
  onIncreaseAmount,
  onDecreaseAmount,
  totalPrice,
  itemAmount,
}) {
  return (
    <div className={`${isOpen ? "side_bar_open" : "side_bar_close"} side_bar`}>
      <div className="side">
        <div className="shopping_bag">Shopping Bag ({itemAmount})</div>
        <div className="forward" onClick={() => setIsOpen(!isOpen)}>
          <IoMdArrowForward className="forward_icon" />
        </div>
      </div>
      <div className="box_cart_item">
        {cart.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              onRemoveFromCart={onRemoveFromCart}
              onIncreaseAmount={onIncreaseAmount}
              onDecreaseAmount={onDecreaseAmount}
            />
          );
        })}
      </div>
      <div className="box_total">
        <div className="bottom_side">
          {/* cmimi total*/}
          <div className="total_price">
            <span className="span_total">Total:</span>$
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/*fshin cart item*/}
          <div className="trash" onClick={onClearCart}>
            <FaTrash />
          </div>
        </div>
        <p className="view_cart">View Cart</p>
        <p className="checkout">Checkout</p>
      </div>
    </div>
  );
}
