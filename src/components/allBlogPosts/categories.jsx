import React, { useState } from "react";

const Category = ({
  category,
  selectedCategory,
  handleChange,
  isolateCategory,
}) => {
  return (
    <>
      <li>
        <button
          className={`${
            category === selectedCategory ? "text-orange-400" : ""
          }`}
          onClick={() => {
            handleChange(category);
          }}
        >
          {category}
        </button>
      </li>
    </>
  );
};

export default Category;
