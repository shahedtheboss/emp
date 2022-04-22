import { withWidth } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "../axios";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const getCourses = () => {
    axios
      .get("/courses")
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postCourse = () => {
    console.log(details, name, link, image);
    axios
      .post("/courses", {
        name: `${name}`,
        details: `${details}`,
        image: `${image}`,
        link: `${link}`,
      })
      .then(
        (response) => {
          console.log(response);
          alert("Course posted");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getCourses();
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
          placeholder="Redirect Link"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Details"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button onClick={postCourse}>Post</button>
      </div>
      {courses.map((cor) => (
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
          <h5>{cor.image}</h5>
          <p>{cor.details}</p>
          <a href={cor.link}>{cor.link}</a>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
