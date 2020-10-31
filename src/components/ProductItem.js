import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                // src="https://bulma.io/images/placeholders/128x128.png"
                src={Object.values(product.image_urls)[0]}
                alt={Object.values(product.image_urls)[0]}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-info">${product.weight}</span>
            </b>
            <div>{product.tagline}</div>
            {/* {product.name > 0 ? (
              <small>{product.id + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )} */}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-info   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.id,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
