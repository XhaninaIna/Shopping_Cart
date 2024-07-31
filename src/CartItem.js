import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
export default function CartItem({
  item,
  onRemoveFromCart,
  onIncreaseAmount,
  onDecreaseAmount,
}) {
  //destruktor i item
  const { id, title, image, price, amount } = item;
  return (
    <div className="box_cartItem">
      <div className="cartItem">
        <img src={image} alt="image" className="img_cart" />
        <div className="middle_box">
          {/*titulli*/}
          <div className="inner_box">
            <p className="title_item">{title}</p>
            {/*ikona e fshirjes*/}
            <div className="box_icon" onClick={() => onRemoveFromCart(id)}>
              <IoMdCloseCircle className="close_icon" />
            </div>
          </div>
          <div className="box_info">
            <div className="quantity">
              {/*zvogelo sasine*/}
              <div className="minus_btn" onClick={() => onDecreaseAmount(id)}>
                <CiSquareMinus />
              </div>
              <div className="amount">{amount}</div>
              {/*rrit sasine*/}
              <div className="add_btn" onClick={() => onIncreaseAmount(id)}>
                <CiSquarePlus />
              </div>
            </div>
            {/*cmimi per 1 sasi*/}
            <div className="initial_price">${price}</div>
            {/*cmimi total*/}
            <div className="final_price">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
