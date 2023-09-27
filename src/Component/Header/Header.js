import React from "react";
import img from "../../images/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div
        className="img"
        style={{
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            height: "50px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
          }}
        />
        <nav
          style={{
            alignContent: "start",
            justifyContent: "start",
            textAlign: "start",
            backgroundColor: "black",

            padding: "15px 10%",
          }}
        >
          <a href="/shop">Shop</a>
          <a href="/review">
            <Link to={"/review"}>Review Order</Link>
          </a>

          <a href="/inventory">Manage inventory</a>
        </nav>
      </div>
    </div>
  );
}
