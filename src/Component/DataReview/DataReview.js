import React, { useContext } from "react";
import { CategoryContext } from "../../App";

export default function DataReview() {
  const category = useContext(CategoryContext);
  return (
    <div>
      {Array.from(category).map((item) => {
        return (
          <div className="div">
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
