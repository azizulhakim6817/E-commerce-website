import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";

const ProductsSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <h4 className=" text-center m-5">All Products</h4>
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-3 col-12">
              <div className="card shadow-sm h-100 rounded-3 bg-white">
                <Lottie
                  className="w-100"
                  animationData={ImagePlaceholder}
                  loop={true}
                />
                <div className="card-body">
                  <Skeleton count={1} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsSkeleton;
