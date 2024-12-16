import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";

const BrandsSkeleton = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
          <span className="bodySmal mb-5 text-center">
            Explore a World of Choices Across Our Most Popular <br />
            Shopping Categories{" "}
          </span>
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <div
                key={i}
                className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 text-center"
              >
                <div className="card h-100 rounded-3 bg-white">
                  <div className="card-body">
                    <Lottie
                      className="w-100"
                      animationData={ImagePlaceholder}
                      loop={true}
                    />
                    <Skeleton count={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsSkeleton;
