import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

function Courses() {
  const [cars, setCars] = useState([]);
  const [courses, setCourses] = useState([]);
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newLink, setNewLink] = useState("");

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

    axios
      .get("/coursecars")
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
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

  const deleteCourse = (id) => {
    axios
      .delete(`/deletecourse/${id}`)
      .then((res) => {
        console.log(res);
        alert("Course Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSlide1 = (id) => {
    axios
      .put("/updatecor1", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
      });
  };

  const updateSlide2 = (id) => {
    axios
      .put("/updatecor2", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
      });
  };

  const updateSlide3 = (id) => {
    axios
      .put("/updatecor3", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <Link to="/">
        <button style={{ float: "left" }}>
          <h1>Home Page</h1>
        </button>
      </Link>
      <Link to="/shop">
        <button style={{ float: "left", marginBottom: 100 }}>
          <h1>Shop</h1>
        </button>
      </Link>
      <br />
      {cars.map((sl) => (
        <div
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
          <button
            onClick={() => {
              deleteCourse(cor._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
