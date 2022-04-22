import React from "react";
import "./Book.css";

function Book({ name, writer, price, image }) {
  const cut = (ln) => {
    var part = ln.substring(ln.lastIndexOf("d/") + 2, ln.lastIndexOf("/v"));
    return part;
  };
  var i1 = cut(image);
  return (
    <div>
      <div>
        <div className="product">
          <img src={image} alt="" />
          <h2>{name}</h2>
          <h4>{writer}</h4>
          <p className="price">{price}</p>

          <button className="bok">Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
