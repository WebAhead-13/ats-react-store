import ProductList from "../../components/products";
import CatecoryFilter from "../../components/categoryFilter";
import "./style.css";
import React from "react";

function Store(props) {
  const [category, setcategory] = React.useState("all");
  // const [search, setSearch] = React.useState("");

  return (
    <div className="store-container">
      <div>
        <CatecoryFilter category={category} setCategory={setcategory} />
      </div>
      <div className="main">
        <ProductList
          range={0}
          categ={category}
          details={props.details}
          setDetails={props.setDetails}
        />
      </div>
    </div>
  );
}

export default Store;
