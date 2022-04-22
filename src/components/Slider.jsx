import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

function Slider({ img1, img2, img3, redirect1, redirect2, redirect3 }) {
  console.log(img3);
  const cut = (ln) => {
    var part = ln.substring(ln.lastIndexOf("d/") + 2, ln.lastIndexOf("/v"));
    return part;
  };
  var i1 = cut(img1);
  var i2 = cut(img2);
  var i3 = cut(img3);

  console.log(i1);
  console.log(i2);
  console.log(i3);
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <a href={redirect1}>
            <img
              src={`https://drive.google.com/thumbnail?sz=w640&id=${i1}`}
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={redirect2}>
            <img
              src={`https://drive.google.com/thumbnail?sz=w640&id=${i2}`}
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={redirect3}>
            <img
              src={`https://drive.google.com/thumbnail?sz=w640&id=${i3}`}
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
