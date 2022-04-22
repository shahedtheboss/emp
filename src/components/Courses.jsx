import React, { useEffect, useState } from "react";
import "./Courses.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Course from "./Course";
import Slider from "./Slider";
import db from "../firebase";
import axios from "../axios";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Courses({ setCor }) {
  const [course, setCourse] = useState([]);
  const [car, setCar] = useState([]);

  const getCourses = () => {
    axios.get("/courses").then((res) => {
      console.log(res.data);
      setCourse(res.data);
    });
  };

  const getCrCar = () => {
    axios.get("/coursecars").then((res) => {
      console.log(res.data);
      setCar(res.data);
    });
  };

  useEffect(() => {
    getCourses();
    getCrCar();
  }, []);

  return (
    <div>
      <div className="courses">
        {car.map((sl) => (
          <Slider
            key={sl._id}
            img1={sl.img1}
            img2={sl.img2}
            img3={sl.img3}
            redirect1={sl.link1}
            redirect2={sl.link2}
            redirect3={sl.link3}
          />
        ))}

        {course.map((cr) => (
          <Course
            key={cr.id}
            name={cr.name}
            image={cr.image}
            details={cr.details}
            link={cr.link}
            changeCor={(cor) => setCor(cor)}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
