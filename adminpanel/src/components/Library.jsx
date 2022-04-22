import React, { useEffect, useState } from "react";
import axios from "../axios";

function Library() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [image, setImage] = useState("");
  const [serial, setSerial] = useState("");
  const [price, setPrice] = useState("");

  const getBooks = () => {
    axios
      .get("/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postBook = () => {
    axios
      .post("/books", {
        name: `${name}`,
        image: `${image}`,
        price: `${price}`,
        writer: `${writer}`,
        serial: `${serial}`,
      })
      .then(
        (response) => {
          console.log(response);
          alert("Book posted");
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const deleteBook = (id) => {
    axios
      .delete(`/deletebook/${id}`)
      .then((res) => {
        console.log(res);
        alert("Book Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <div
        className="input"
        style={{
          height: 100,
          display: "flex",
          flexDirection: "column",
          margin: 50,
        }}
      >
        <input
          type="text"
          placeholder="Course Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Course Image Link"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Writer Name"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Book Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Serial"
          onChange={(e) => {
            setSerial(e.target.value);
          }}
        />
        <button onClick={postBook}>Post</button>
      </div>
      {books.map((cor) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightgray",
            flexDirection: "column",
            margin: 10,
            height: "auto",
          }}
        >
          <h3>{cor.name}</h3>
          <h5>{cor.writer}</h5>
          <h5>{cor.image}</h5>
          <p>{cor.price} taka</p>

          <button
            onClick={() => {
              deleteBook(cor._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Library;
