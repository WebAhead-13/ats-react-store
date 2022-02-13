import React from "react";

function CatecoryFilter({ category, setCategory }) {
  const categories = ["All", "Dairy", "Frozen", "Bakery"];
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={category === cat}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CatecoryFilter;
