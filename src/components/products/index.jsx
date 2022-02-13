import React from "react";
import data from "../../utils/dataset.json";
import Product from "./product";
import "./style.css";

function ProductList({ range, categ, ...props }) {
  const search = "";
  const products = data.data;
  if (search !== "") {
    const newP = products.filter(
      (product) => search.toLowerCase() === product.title.toLowerCase()
    );
    return (
      <ul className="container-p">
        {newP.map((product) => {
          return (
            <Product
              key={product._id}
              pName={product.title}
              pImage={product.images[0]}
              pPrice={product.price}
              pDescreption={product.description}
              pCategory={product.category}
              pBrand={product.brand}
              pDirections={product.suggestion}
              pAllegations={product.allegations}
              pSize={product.size}
              details={props.details}
              setDetails={props.setDetails}
            />
          );
        })}
      </ul>
    );
  } else {
    const newP = products.filter(
      (product) => categ === "All" || product.category === categ
    );
    return (
      <ul className="container-p">
        {newP.map((product) => {
          return (
            <Product
              key={product._id}
              pName={product.title}
              pImage={product.images[0]}
              pPrice={product.price}
              pDescreption={product.description}
              pCategory={product.category}
              pBrand={product.brand}
              pDirections={product.suggestion}
              pAllegations={product.allegations}
              pSize={product.size}
              details={props.details}
              setDetails={props.setDetails}
            />
          );
        })}
      </ul>
    );
  }
}

export default ProductList;
