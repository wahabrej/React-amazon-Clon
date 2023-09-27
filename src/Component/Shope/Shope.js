import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../Product/Product";
import "./shope.css";
import { createContext } from "react";
import Cart from "../Cart/Cart";
export const CategoryContext = createContext();
export default function Shope(props) {
  const [data, setData] = useState(10);
  const [cart, setCart] = useState([]);
  props.onChild(cart);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  const handleAddproduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <CategoryContext.Provider value={cart}>
      <section style={{ display: "flex", padding: "15px 10%" }}>
        <div className="contain" style={{ width: "80%" }}>
          {Array.from(data).map((element) => (
            <Product product={element} handleAddproduct={handleAddproduct} />
          ))}
        </div>
        <div
          className="cart"
          style={{
            border: "2px solid black",
            margin: "5px",
            width: "100%",
            height: "400px",
            left: "20px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Cart cart={cart} />
        </div>
      </section>
    </CategoryContext.Provider>
  );
}
