import React, { useEffect, useState } from "react";
import Book from "./Book";
import axios from "../axios";

function Library() {
  const [book, setBook] = useState([]);
  const getBook = () => {
    axios.get("/books").then((res) => {
      console.log(res.data);
      setBook(res.data);
    });
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <a href={"https://www.facebook.com"}>
        <button
          style={{
            width: "100%",
            height: 50,
            fontSize: 25,
            backgroundColor: "red",
            fontWeight: 1000,
            color: "white",
            borderRadius: 20,
          }}
        >
          Request a New Book
        </button>
      </a>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {book.map((bk) => (
          <Book
            name={bk.name}
            price={bk.price}
            writer={bk.writer}
            image={bk.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
