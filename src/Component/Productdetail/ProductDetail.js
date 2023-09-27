import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Detail from "../Detail/Detail";
import Product from "../Product/Product";

export default function ProductDetail() {
  const [data, setData] = useState({});
  const { productKey } = useParams();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const product = data.find((f) => Object.f.key === productKey);

  return (
    <div>
      <h1>{productKey}</h1>

      <Detail product={product} />
    </div>
  );
}
