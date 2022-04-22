import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "../axios";

function Shop() {
  const [links, setLinks] = useState([]);
  const [item, setItem] = useState([]);
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);
  const [serial, setSerial] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [newLink, setNewLink] = useState("");

  const shopAll = () => {
    axios
      .get("/shopcars")
      .then((res) => {
        console.log(res.data);
        setLinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
        // alert("Success");
      });
  };

  const postProduct = () => {
    console.log(name, image, serial, price);
    axios
      .post("/products", {
        name: `${name}`,
        image: `${image}`,
        price: `${price}`,
        serial: `${serial}`,
      })
      .then((response) => {
        console.log(response);
        alert("Product posted");
      });
  };

  const updateSlide1 = (id) => {
    axios
      .put("/updateshop1", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
        alert("Success");
      });
  };

  const updateSlide2 = (id) => {
    axios
      .put("/updateshop2", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
        alert("Success");
      });
  };

  const updateSlide3 = (id) => {
    axios
      .put("/updateshop3", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`/deleteproduct/${id}`)
      .then((res) => {
        console.log(res);
        alert("Product Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    shopAll();
  }, []);

  return (
    <div>
      <Link to="/">
        <button style={{ float: "left", margin: 20 }}>
          <h1>Home Page</h1>
        </button>
      </Link>
      <Link to="/courses">
        <button style={{ float: "left", marginBottom: 100, margin: 20 }}>
          <h1>Courses</h1>
        </button>
      </Link>
      <br />
      {links.map((sl) => (
        <div
          key={sl._id}
          style={{
            border: "2px solid black",
            backgroundColor: "lightgray",
            marginTop: 100,
          }}
        >
          <h2>Slides</h2>
          <div style={{ border: "2px solid black" }}>
            <input
              type="text"
              placeholder="New image link"
              onChange={(e) => {
                setNewImage(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="New redirect link"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateSlide1(sl._id);
              }}
            >
              Post
            </button>
            <br />
            image1:<a href={sl.img1}>{sl.img1}</a>
            <br></br>
            link1: <a href={sl.link1}>{sl.link1}</a>
          </div>
          <div style={{ border: "2px solid black" }}>
            <input
              type="text"
              placeholder="New image link"
              onChange={(e) => {
                setNewImage(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="New redirect link"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateSlide2(sl._id);
              }}
            >
              Post
            </button>
            <br />
            image2:<a href={sl.img2}>{sl.img2}</a>
            <br></br>
            link2: <a href={sl.link2}>{sl.link2}</a>
          </div>
          <div style={{ border: "2px solid black" }}>
            <input
              type="text"
              placeholder="New image link"
              onChange={(e) => {
                setNewImage(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="New redirect link"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updateSlide3(sl._id);
              }}
            >
              Post
            </button>
            <br />
            image3:<a href={sl.img3}>{sl.img3}</a>
            <br></br>
            link3: <a href={sl.link3}>{sl.link3}</a>
          </div>
        </div>
      ))}

      <div
        className="input"
        style={{
          height: 100,
          display: "flex",
          flexDirection: "column",
          margin: 50,
        }}
      >
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Product Serial"
          onChange={(e) => {
            setSerial(e.target.value);
          }}
        />

        <button onClick={postProduct}>Post</button>
      </div>

      <div
        style={{
          border: "2px solid black",
          backgroundColor: "lightgray",
          marginTop: 100,
        }}
      >
        <h1>Products</h1>
        {item.map((it) => (
          <div
            key={it._id}
            style={{
              border: "10px solid black",
              backgroundColor: "white",
              marginTop: 100,
            }}
          >
            <h3>{it.name}</h3>
            image:<a href={it.image}>{it.image}</a>
            <br />
            price:{it.price}
            <br />
            <button
              onClick={() => {
                deleteProduct(it._id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
