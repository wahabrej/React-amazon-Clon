import React from "react";
import { Link } from "react-router-dom";
export default function Cart(props) {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = total / 10;
  return (
    <div>
      <h1>Order Summary</h1>
      <h3>Items Orderd :{cart.length}</h3>
      <h6>Product Price :{total}</h6>
      <h6>Shipping :{shipping}</h6>
      <h6> Tax & Vat :{tax}</h6>

      <h6>Total Price:{total + shipping + tax}</h6>
      <button>
        <Link to={"/review"}>Review Order</Link>
      </button>
      {/* 
      {Array.from(cart).map((cart) => {
        return (
          <div className="cart">
            <img src={cart.img} alt="" />
          </div>
        );
      })} */}
    </div>
  );
}
