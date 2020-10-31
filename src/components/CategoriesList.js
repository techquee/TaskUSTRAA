import React from "react";
import CategoryItem from "./CategoryItem";
import "../index.css"
import withContext from "../withContext";

const CategoryList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="container">
        <div className="columns ColumnCategories">
          {products && products.length ? (
            products.map((product, index) => (
              <CategoryItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No categories found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(CategoryList);
