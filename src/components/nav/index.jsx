import React from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import "./style.css";
// import style from "./style.home-button";

function Navbar({ handler }) {
  return (
    <div className="navBar">
      <div className="primary-c">
        <span className="title">AtS-Store</span>

        <Button
          placeHolderText={"Home"}
          onClick={() => (window.location.href = "/")}
          extraStyle={{
            backgroundColor: "unset",
            border: "unset",
            fontSize: "20px",
            marginRight: "25px",
          }}
        />
        <SearchBar />
        <Button placeHolderText="search" />
      </div>
      <div className="secondary-c">
        <Button
          placeHolderText={"Store"}
          onClick={() => (window.location.href = "/store")}
          extraStyle={{
            backgroundColor: "unset",
            border: "unset",
            fontSize: "20px",
            marginRight: "50px",
          }}
        />
        <Button
          placeHolderText={"Cart"}
          onClick={() => (window.location.href = "/cart")}
          extraStyle={{
            backgroundColor: "unset",
            border: "unset",
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
