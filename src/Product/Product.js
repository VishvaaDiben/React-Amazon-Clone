import "./Product.css";

import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
const [{basket}, dispatch] = useStateValue();
const addToBasket = () => {
    //Add item to basket ...
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id:id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
    })
};

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            //trick to map out stars
            Array(rating)
              .fill()
              .map((_) => (
                <p>&#11088;</p>
              ))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
