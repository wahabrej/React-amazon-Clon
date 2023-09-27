import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import { Link } from "react-router-dom";

export default function Review(props) {
  const category = useContext(CategoryContext);

  const cart = category;
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
    <div className="div">
      <div
        className="left"
        style={{ width: "60%", float: "left", overflow: "hidden" }}
      >
        {" "}
        <div>
          <h2
            style={{
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "20px",
            }}
          >
            This Category Product You Choose
          </h2>
          {Array.from(cart).map((item) => {
            return (
              <div
                className="container"
                style={{
                  border: "2px solid yellow",
                  display: "flex",
                  borderRadius: "17px",
                  marginBottom: "10px",
                }}
              >
                <div className="img">
                  <img src={item.img} alt="img" />
                </div>
                <div
                  className="des"
                  style={{
                    margin: "10px",

                    textAlign: "start",
                  }}
                >
                  <h4>{item.name}</h4>
                  <h4>Category :{item.category}</h4>
                  <h4>Stock :{item.stock}</h4>
                  <h5>Price : {item.price}</h5>
                  <button onClick={() => props.removeItem(item.key)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="right"
        style={{
          right: "10px",
          marginTop: "60px",
          width: "25%",
          float: "left",
          border: "2px solid tomato",

          borderRadius: "15px",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Order Summary</h1>
          <h3>Items Orderd :{cart.length}</h3>
          <h6>Product Price :{total}</h6>
          <h6>Shipping :{shipping}</h6>
          <h6> Tax & Vat :{tax}</h6>

          <h6>Total Price:{total + shipping + tax}</h6>
          <button
            style={{
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link to={"/review"}>Add TO Cart</Link>
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
      </div>
    </div>
  );
}
