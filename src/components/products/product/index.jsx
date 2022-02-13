import React from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Product({
  pName,
  pImage,
  pPrice,
  pDescreption,
  pCategory,
  pBrand,
  pDirections,
  pAllegations,
  pSize,
  details,
  setDetails,
}) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/details`;
    setDetails({
      productName: pName,
      productImage: pImage,
      productPrice: pPrice,
      productDescreption: pDescreption,
      ProductCategory: pCategory,
      productBrand: pBrand,
      productDirections: pDirections,
      productAllegations: pAllegations,
      ProductSize: pSize,
    });

    navigate(path);
  };
  return (
    <div className="primary-container">
      <li className="product-container">
        <span className="name-box" width={250}>
          {pName}
        </span>
        <img
          src={pImage}
          alt=""
          height={200}
          width={250}
          className="image-p"
        ></img>
        <div className="second-container">
          <span>${pPrice}</span>
          <Button
            placeHolderText="View Product Details"
            onClick={routeChange}
            extraStyle={{
              backgroundColor: "unset",
              fontSize: "20px",
            }}
          />
          <Button
            placeHolderText="Add to cart"
            // onClick={}
          />
        </div>
      </li>
    </div>
  );
}

export default Product;
