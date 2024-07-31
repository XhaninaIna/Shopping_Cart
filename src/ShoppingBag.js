import { SlBasket } from "react-icons/sl";
export default function ShoppingBag({ onIsOpen, itemAmount }) {
  return (
    <div onClick={onIsOpen} className="cursor">
      <SlBasket className="bag" />
      <div className="item_amount">{itemAmount}</div>
    </div>
  );
}
