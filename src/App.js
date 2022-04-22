import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import Shop from "./components/Shop";
import Library from "./components/Library";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import CourseCheck from "./components/CourseCheck";
import Admin from "./components/Admin";
import Email from "./components/Email";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cor, setCor] = useState([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header img="https://images.techshohor.com/wp-content/uploads/2020/04/24092851/logo_400x200.png" />
            <HomePage />
            <Footer />
          </Route>

          <Route exact path="/courses">
            <Header img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJARPzYz9GGuUCBF83897gRdqKN4tsKilC3g&usqp=CAU" />
            <Courses setCor={setCor} />
            <Footer />
          </Route>
          <Route exact path="/shop">
            <Header img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34dyR4PdRqvfNi_QIruoGyjHihGJrL98VuA&usqp=CAU" />
            <Shop setCart={setCart} />
            <Footer />
          </Route>
          <Route exact path="/library">
            <Header img="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png" />
            <Library />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <Header img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34dyR4PdRqvfNi_QIruoGyjHihGJrL98VuA&usqp=CAU" />
            <Checkout cart={cart} />
          </Route>
          <Route exact path="/crch">
            <Header img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34dyR4PdRqvfNi_QIruoGyjHihGJrL98VuA&usqp=CAU" />
            <CourseCheck cor={cor} />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
