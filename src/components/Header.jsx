import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ img }) {
  return (
    <div className="header_app">
      <div className="logo">
        <img className="logo-image" src={img} alt="" />
      </div>
      <div className="head">
        <div className="first-head">
          <Link to="/" className="link">
            <button>Home</button>
          </Link>
          <Link to="/courses" className="link">
            <button>Courses</button>
          </Link>
          <Link to="/shop" className="link">
            <button>Shop</button>
          </Link>
          <Link to="/library" className="link">
            <button>Library</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
