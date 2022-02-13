import React from "react";
import Button from "../../components/Button";
import "./style.css";

function PoductDetials({ details }) {
  return (
    <div>
      <h1>{details.productName}</h1>
      <div>
        <span>image</span>
        <img src={details.productImage}></img>
        <Button
          placeHolderText="Add to Cart"
          // onClick={}
        />
      </div>
      <div>
        <div>
          <span>Descreption</span>
          <p>{details.productDescreption}</p>
        </div>
        <div>
          <span>Specifications</span>
          <span>{details.productCategory}</span>
          <span>{details.productSize}</span>
          <span>{details.productPrice}</span>
          <span>{details.productBrand}</span>
        </div>
        <div>
          <span>Directions</span>
          <p>{details.productDirections}</p>
        </div>
        <div>
          <span>Allegations</span>
          <p>{details.productAllegations}</p>
        </div>
      </div>
    </div>
  );
}

export default PoductDetials;
