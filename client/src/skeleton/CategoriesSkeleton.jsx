import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";

const CategoriesSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
        <span className="bodySmal mb-5 text-center">
          Explore a World of Choices Across Our Most Popular <br />
          Shopping Categories{" "}
        </span>

        {/* Mapping over the array to create 4 products per row */}
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-3 p-2 text-center"
            >
              <div className="card h-100 rounded-3 bg-white">
                <div className="card-body">
                  <Lottie
                    className="w-100"
                    animationData={ImagePlaceholder}
                    loop={true}
                  />
                  <Skeleton count={3} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
