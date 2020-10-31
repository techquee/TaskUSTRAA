import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import CategoryList from './CategoriesList';
import ChangeCategory from './ChangeCategory';

const ProductList = props => {
  const { categories } = props.context;

  return (
    <>
      <div className="hero is-info">
        <div className="hero-body container">
          <h4 className="title">Our products</h4>
        </div>
      </div>
      <br />
      <CategoryList/>
      <div className="container">
        <div className="column columns is-multiline">
          {categories && categories.length ? (
            categories.map((product, index) => (
              <ProductItem
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
      <ChangeCategory/>
    </>
  );
};

export default withContext(ProductList);
