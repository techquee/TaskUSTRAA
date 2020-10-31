import React from "react";

const CategoryItem = props => {
  const { product } = props;
  return (
    // <div class="columns">
    <div className="column">
    <figure className="image is-64x64">
              <img
                // src="https://bulma.io/images/placeholders/128x128.png"
                src={product.category_image}
                alt={product.category_image}
              />
            </figure>
       
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.category_name}{" "}
              {/* <span className="tag is-info">${product.category_name}</span> */}
            </b>
            {/* <div>{product.category_name}</div> */}
            {/* {product.category_name > 0 ? (
              <small>{product.category_id + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
         */}
          </div>
    </div>
            
  );
};

export default CategoryItem;
