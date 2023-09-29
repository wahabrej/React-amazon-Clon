import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Shope from "./Component/Shope/Shope";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import Review from "./Component/Review/Review";
import Inventory from "./Component/Inventory/Inventory";
import NoMatch from "./Component/Nomatch/NoMatch";

import React, { createContext, useEffect, useState } from "react";
import DataReview from "./Component/DataReview/DataReview";
import ProductDetail from "./Component/Productdetail/ProductDetail";

export const CategoryContext = createContext();
function App() {
  const [data, setData] = useState([]);
  const childData = (infor) => {
    setData(infor);
  };
  const removeItem = (item) => {
    console.log("Item is remove", item);
    const newCart = data.filter((pd) => pd.key !== item);
    setData(newCart);
  };
  return (
    <CategoryContext.Provider value={data}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shope onChild={childData} />}></Route>
          <Route
            path="/review"
            element={<Review removeItem={removeItem} />}
          ></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route
            path="/product/:productKey"
            element={<ProductDetail />}
          ></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
