import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import "./Course.css";

function Course({ name, image, details, link, changeCor }) {
  const ct = [{ name }, { image }, { details }, { link }];
  var part = image.substring(
    image.lastIndexOf("d/") + 2,
    image.lastIndexOf("/v")
  );
  return (
    <div>
      <div className="course course-1">
        <img
          className="image"
          src={`https://drive.google.com/thumbnail?id=${part}`}
        />
        <h1>{name}</h1>
        <p>{details}</p>
        <a href={link}>
          <FacebookIcon style={{ fontSize: 60 }} />
        </a>
        {/* <Link to="/crch">
          <button className="more" onClick={() => changeCor(ct)}>
            View More
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default Course;
