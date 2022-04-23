const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const Course = require("../models/coursesModel");
const HomeCar = require("../models/homeCarousel");
const ShopCar = require("../models/shopCarousel");
const HotCourse = require("../models/hotCourses");
const CourseCar = require("../models/courseCarousel");
const Book = require("../models/book");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//GET requests
router.get("/", (req, res) => {
  res.send("Hello this is the server website of sajansiremp");
});

router.get("/products", (req, res) => {
  Product.find()
    .sort({ serial: 1 })
    .then((data) => {
      res.json(data);
    }).catch((err) =>{
      console.log(err);
    });
});

router.get("/courses", (req, res) => {
  Course.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/hotcourses", (req, res) => {
  HotCourse.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/courseinfo", (req, res) => {
  Course.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/homecars", (req, res) => {
  HomeCar.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/shopcars", (req, res) => {
  ShopCar.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/coursecars", (req, res) => {
  CourseCar.find().then((data) => {
    res.json(data);
  }).catch((err) =>{
    console.log(err);
  });;
});

router.get("/books", (req, res) => {
  Book.find()
    .sort({ serial: 1 })
    .then((data) => {
      res.json(data);
    }).catch((err) =>{
      console.log(err);
    });;
});

//POST requests
router.post("/courses", (req, res) => {
  let course = new Course({
    name: req.body.name,
    details: req.body.details,
    image: req.body.image,
    link: req.body.link,
  });

  course
    .save()
    .then((bk) => {
      res.send(bk);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/hotcourses", (req, res) => {
  let course = new HotCourse({
    name: req.body.name,
    img: req.body.img,
    link: req.body.link,
  });

  course
    .save()
    .then((bk) => {
      res.send(bk);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/products", (req, res) => {
  let product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    serial: req.body.serial,
  });

  product
    .save()
    .then((bk) => {
      res.send(bk);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/books", (req, res) => {
  let book = new Book({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    writer: req.body.writer,
    serial: req.body.serial,
  });

  book
    .save()
    .then((bk) => {
      res.send(bk);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//DELETE requests
router.delete("/deletecourse/:id", async (req, res) => {
  const id = req.params.id;
  await Course.findByIdAndRemove(id).exec();
  res.send("item deleted");
});

router.delete("/deletehotcourse/:id", async (req, res) => {
  const id = req.params.id;
  await HotCourse.findByIdAndRemove(id).exec();
  res.send("item deleted");
});

router.delete("/deleteproduct/:id", async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndRemove(id).exec();
  res.send("item deleted");
});

router.delete("/deletebook/:id", async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndRemove(id).exec();
  res.send("item deleted");
});

//PUT requests
router.put("/updatehome1", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await HomeCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img1 = newImage;
      carToUpdate.link1 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

router.put("/updatehome2", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await HomeCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img2 = newImage;
      carToUpdate.link2 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

router.put("/updatehome3", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await HomeCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img3 = newImage;
      carToUpdate.link3 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

//

router.put("/updatecor1", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await CourseCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img1 = newImage;
      carToUpdate.link1 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

router.put("/updatecor2", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await CourseCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img2 = newImage;
      carToUpdate.link2 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

router.put("/updatecor3", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await CourseCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img3 = newImage;
      carToUpdate.link3 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

//

router.put("/updateshop1", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await ShopCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img1 = newImage;
      carToUpdate.link1 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  console.log(newImage, newLink);
  res.send("updated");
});

router.put("/updateshop2", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await ShopCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img2 = newImage;
      carToUpdate.link2 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  console.log(newImage, newLink);

  res.send("updated");
});

router.put("/updateshop3", async (req, res) => {
  const newImage = req.body.newImage;
  const newLink = req.body.newLink;
  const id = req.body.id;

  try {
    await ShopCar.findById(id, (error, carToUpdate) => {
      carToUpdate.img3 = newImage;
      carToUpdate.link3 = newLink;

      carToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  console.log(newImage, newLink);

  res.send("updated");
});

module.exports = router;
