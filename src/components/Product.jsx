import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ name, img, price, serial, changeCart }) {
  var ct = [{ name }, { img }, { price }, { serial }];

  return (
    <div>
      <div className="product">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p className="price">{price}tk</p>
        <Link className="plink" to="/cart">
          <button onClick={() => changeCart(ct)}>Buy now</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
