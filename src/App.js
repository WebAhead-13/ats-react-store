import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/nav";
import Home from "./pages/Home";
import Store from "./pages/Store";
import PoductDetials from "./pages/ProductDetails";
import { logDOM } from "@testing-library/react";

function App() {
  const [details, setDetails] = React.useState({
    productName: "",
    productImage: "",
    productDescreption: "",
    productCategory: "",
    productPrice: "",
    productBrand: "",
    productDirections: "",
    productAllegations: "",
    productSize: "",
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store details={details} setDetails={setDetails} />}
        />
        <Route path="/details" element={<PoductDetials details={details} />} />
      </Routes>
    </Router>
  );
}

export default App;
