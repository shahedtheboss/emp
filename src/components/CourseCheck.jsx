import React, { useEffect } from "react";
import "./CourseCheck.css";

function CourseCheck({ cor }) {
  cor.map((ct) => {
    var name = ct.name;
    console.log(name);
    // console.log(ct.img);
  });

  var part = cor[1].image.substring(
    cor[1].image.lastIndexOf("d/") + 2,
    cor[1].image.lastIndexOf("/v")
  );

  console.log(cor);

  if (cor[0] === undefined) {
    return <h1 className="errmsg">NO COURSES SELECTED TO BUY</h1>;
  } else {
    return (
      <div>
        <div className="pro">
          <img
            className="image"
            src={`https://drive.google.com/thumbnail?id=${part}`}
          />
          <h1 className="itemName">{cor[0].name}</h1>
          <h2>{cor[2].details}</h2>
          {/* <h1>Price: {cor[3].price} taka</h1> */}
        </div>
        <div className="pro2">
          <h1>Price: 1000 taka</h1>
          <button className="sub">BUY IT</button>
        </div>
      </div>
    );
  }
}

export default CourseCheck;
