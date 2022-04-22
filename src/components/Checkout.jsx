import React, { useEffect, useState } from "react";
import Email from "./Email";
import "./Checkout.css";

function Checkout(props) {
  props.cart.map((ct) => {
    var name = ct.name;
    console.log(name);
    // console.log(ct.img);
  });

  console.log(props.cart);

  if (props.cart[0] === undefined) {
    return <h1 className="errmsg">NO ITEM SELECTED TO BUY</h1>;
  } else {
    return (
      <div>
        <div className="pro">
          <h1 className="itemName">{props.cart[0].name}</h1>
          <img src={props.cart[1].img} alt="" />
          <h1>Price: {props.cart[2].price} taka</h1>
        </div>

        <Email cart={props.cart} />
      </div>
    );
  }
}

export default Checkout;
