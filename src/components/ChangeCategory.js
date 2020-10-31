import React from "react";
import "../index.css"

const ChangeCategory = props => {
  const { categories } = props;
  return (

  // <div class="dropdown-menu" id="dropdown-menu2" role="menu">
  //   <div class="dropdown-content">
  //     <div class="dropdown-item">
  //     {categories && categories.length ? (
  //           categories.map((category, index) => (
  //           <p>${category.category_name}</p>
  //           ))
  //         ) : (
  //           <div className="column">
  //             <span className="title has-text-grey-light">
  //               No categories found!
  //             </span>
  //           </div>
  //         )}
  //     </div>
  <>
    <p>Showing results for All</p>
    <a className="floatRight">View More</a>
 </>
  );
};

export default ChangeCategory;
