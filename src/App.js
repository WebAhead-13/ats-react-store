import "./App.css";
import React from "react";
import Button from "./components/Button";
import Radio from "./components/radiobuttons";

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
      <Radio />
    </div>
  );
}

export default App;
