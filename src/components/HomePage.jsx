import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";
import ClassIcon from "@material-ui/icons/Class";
import Slider from "./Slider";
import axios from "../axios";
import YT from "../sajansiryt.png";
// import db from "../firebase";

function HomePage() {
  const [links, setLinks] = useState([]);
  const [courses, setCourses] = useState([]);

  const homeCar = () => {
    axios
      .get("/homecars")
      .then((res) => {
        console.log(res.data);
        setLinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trendCourses = () => {
    axios.get("/hotcourses").then((res) => {
      console.log(res.data);
      setCourses(res.data);
    });
  };

  useEffect(() => {
    homeCar();
    trendCourses();
    console.log(links);
  }, []);

  return (
    <div>
      {links.map((link) => (
        <div style={{ backgroundColor: "black" }}>
          <Slider
            key={link._id}
            img1={link.img1}
            img2={link.img2}
            img3={link.img3}
            redirect1={link.link1}
            redirect2={link.link2}
            redirect3={link.link3}
          />
        </div>
      ))}

      <div className="trend">
        <div className="trend-item">
          <Link to="/shop">
            <img
              className="trend-img"
              src="https://cdn.vectorstock.com/i/1000x1000/08/28/shop-store-flat-icon-vector-14270828.webp"
              alt=""
            />
          </Link>
          <h1 className="trend-head">Shop</h1>
          <Link to="/shop">
            <StorefrontIcon className="trend-icon" />
          </Link>
        </div>

        <div className="trend-item">
          <Link to="/library">
            <img
              className="trend-img"
              src="https://image.shutterstock.com/image-photo/books-on-table-library-600w-1897052713.jpg"
              alt=""
            />
          </Link>
          <h1 className="trend-head">Library</h1>
          <Link to="/library">
            <LocalLibraryIcon className="trend-icon" />
          </Link>
        </div>

        <div className="trend-item">
          <Link to="/courses">
            <img
              className="trend-img"
              src="https://www.irishtimes.com/polopoly_fs/1.4376102.1602188635!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
              alt=""
            />
          </Link>
          <h1 className="trend-head">Courses</h1>
          <Link to="/courses">
            <ClassIcon className="trend-icon" />
          </Link>
        </div>
      </div>
      <div className="yt">
        <div className="ythead">
          <h1>
            Subscribe to my YouTube channel for amazing educaitve contents
          </h1>
        </div>
        <div className="ytimg">
          <a href="https://www.youtube.com/channel/UCEkAKHArFSFVql7b9knF3Mw">
            <img
              src={YT}
              alt=""
              style={{ height: "20%", margin: 20, width: "50%" }}
            />
          </a>
        </div>
      </div>

      <div className="hotcourses">
        {courses.map((course) => (
          <div className="hcourse">
            <img src={course.img} alt="" />
            <h2>{course.name}</h2>
            <a href={course.link}>
              <button>View Details</button>
            </a>
          </div>
        ))}
      </div>
      <Link className="clink" to="/courses">
        <button>All Courses</button>
      </Link>
    </div>
  );
}

export default HomePage;
