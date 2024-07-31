import StarRating from "./StarRating";
import React from "react";
import { useState } from "react";
export default function ProductStarRating() {
  const [productRating, setProductRating] = useState(0);
  return (
    <>
      <StarRating onSetRating={setProductRating} />
      This product was rated {productRating} stars
    </>
  );
}
