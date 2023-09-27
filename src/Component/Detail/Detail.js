import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Detail(props) {
  console.log(props);
  const { name, key, img, category, stock, price } = props.data;
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
      <h6>{}</h6>
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <div
        className="des"
        style={{
          margin: "10px",

          textAlign: "start",
        }}
      >
        <h4>
          <Link to={"/product/" + key}>{name}</Link>
        </h4>

        <h4>Category :{category}</h4>
        <h4>Stock :{stock}</h4>
        <h5>Price : {price}</h5>
      </div>
    </div>
  );
}
