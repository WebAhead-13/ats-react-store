import "./App.css";
import React from "react";
import Button from "./components/Button";

function App() {
  const onClickHAndler = () => {
    alert("hi hhhh");
  };
  return (
    <div>
      <Button
        plaseHolderText={"Home"}
        onClick={onClickHAndler}
        extraStyle={
          {
            // backgroundColor: "unset",
            // border: "unset",
            // fontSize: "20px",
          }
        }
      />
    </div>
  );
}

export default App;
