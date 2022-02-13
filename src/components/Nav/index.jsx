import React from "react";
import Button from "../Button";

function NavBAR({}) {
  return (
    <div>
      <Button
        placeHolderText={"Home"}
        onClick={alert("home was pressed")}
        extraStyle={
            {
          backgroundColor: "unset",
          border: "unset",
          fontSize: "20px",
        }
        }
      />
    </div>
  );
}

export default NavBAR;
