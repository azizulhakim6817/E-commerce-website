import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductStore from "../../store/ProductsStore";


const Reviews = () => {
  const { ReviewList } = ProductStore();
  return (
    <div>
      <ul className="list-group mt-4 list-group-flush">
        {ReviewList !== null ? (
          ReviewList.slice(0, 3).map((item, i) => {
            return (
              <li key={i} className="list-group-item bg-transparent">
                <h6 className="m-0 p-0">
                  <i className="bi bi-person-fill"></i>{" "}
                  {item["profile"]["cus_name"]}
                </h6>
                <StarRatings
                  rating={parseFloat(item["rating"])}
                  starRatedColor="#f5c60d"
                  starDimension="15px"
                  starSpacing="2px"
                />
                <p> {item["des"]}</p>
              </li>
            );
          })
        ) : (
          <span></span>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
