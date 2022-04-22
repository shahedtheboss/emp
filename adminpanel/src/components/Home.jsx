import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

function Home() {
  const [slide, setSlide] = useState([]);
  const [hCourse, setHotCourse] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newLink, setNewLink] = useState("");

  const getAll = () => {
    axios.get("/homecars").then((res) => {
      console.log(res.data);
      setSlide(res.data);
    });

    axios.get("/hotcourses").then((res) => {
      console.log(res.data);
      setHotCourse(res.data);
    });
  };

  const postCourse = () => {
    console.log(name, link, image);
    axios
      .post("/hotcourses", {
        name: `${name}`,
        img: `${image}`,
        link: `${link}`,
      })
      .then((response) => {
        console.log(response);
        alert("Course posted");
      });
  };

  const updateSlide1 = (id) => {
    axios
      .put("/updatehome1", {
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
      .put("/updatehome2", {
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
      .put("/updatehome3", {
        newImage: `${newImage}`,
        newLink: `${newLink}`,
        id: id,
      })
      .then((res) => {
        console.log(res.send);
        alert("Success");
      });
  };

  const deleteCourse = (id) => {
    axios
      .delete(`/deletehotcourse/${id}`)
      .then((res) => {
        console.log(res);
        alert("Course Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Link to="/courses">
        <button style={{ float: "left", marginBottom: 100 }}>
          <h1>Courses</h1>
        </button>
      </Link>
      <Link to="/shop">
        <button style={{ float: "left", marginBottom: 100 }}>
          <h1>Shop</h1>
        </button>
      </Link>
      <br />

      {slide.map((sl) => (
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
                console.log(newImage, newLink);
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

        <button onClick={postCourse}>Post</button>
      </div>

      {hCourse.map((cr) => (
        <div
          style={{
            marginTop: "70px",
            border: "2px solid black",
            backgroundColor: "lightgray",
          }}
        >
          <div style={{ border: "2px solid black" }}>
            <h2>Course</h2>
            image:<a href={cr.img}>{cr.img}</a>
            <br />
            name:{cr.name}
            <br />
            link: <a href={cr.link}>{cr.link}</a>
          </div>
          <button
            onClick={() => {
              deleteCourse(cr._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
