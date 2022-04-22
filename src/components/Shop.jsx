import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./Product";
import Slider from "./Slider";
import db from "../firebase";
import axios from "../axios";

function Shop({ setCart }) {
  const [car, setCar] = useState([]);
  const [products, setProducts] = useState([]);

  const shopCarousel = () => {
    axios.get("/shopcars").then((res) => {
      console.log(res.data);
      setCar(res.data);
    });
  };

  const shopProducts = () => {
    axios.get("/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  useEffect(() => {
    shopCarousel();
    shopProducts();
  }, []);

  return (
    <div>
      {car.map((sl) => (
        <Slider
          key={sl.id}
          img1={sl.img1}
          img2={sl.img2}
          img3={sl.img3}
          redirect1={sl.link1}
          redirect2={sl.link2}
          redirect3={sl.link3}
        />
      ))}

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            serial={product.serial}
            changeCart={(cart) => setCart(cart)}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
