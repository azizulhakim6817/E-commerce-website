import React, { useEffect } from "react";
import WishShore from "../../store/WishStore";
import ProductsSkeleton from "./../../skeleton/ProductsSkeleton";
import NoData from "./../layout/NoData";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { Link } from "react-router-dom";

const WishList = () => {
  const { WishList, WishListRequest, RemoveWishListRequest } = WishShore();

  useEffect(() => {
    WishListRequest();
  }, [WishListRequest]);

  const remove = async (productID) => {
    await RemoveWishListRequest(productID);
    await WishListRequest();
  };

  if (WishList === null) {
    return (
      <div className="container">
        <div className="row">
          <ProductsSkeleton />
        </div>
      </div>
    );
  }

  if (WishList.length === 0) {
    return <NoData />;
  }

  return (
    <div className="container mt-3">
      <div className="row">
        {WishList.map((item, i) => {
          const product = item?.products;
          const price = product?.discount ? (
            <p className="bodyMedium text-dark my-1">
              Price: <strike>${product?.price}</strike> $
              {product?.discountPrice}
            </p>
          ) : (
            <p className="bodyMedium text-dark my-1">
              Price: ${product?.price}
            </p>
          );

          return (
            <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
              <div className="card shadow-sm h-100 rounded-3 bg-white">
                <img
                  alt={product?.title || "Product"}
                  className="w-100 rounded-top-2"
                  src={product?.image}
                />
                <div className="card-body">
                  <p className="bodySmall text-secondary my-1">
                    {product?.title}
                  </p>
                  {price}
                  <StarRatings
                    rating={parseFloat(product?.star) || 0}
                    starRatedColor="red"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                  <p className="mt-3">
                    <button
                      onClick={() => remove(item.productID)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Remove
                    </button>
                    <Link
                      className="btn mx-2 btn-outline-success btn-sm"
                      to={`/details/${item.productID}`}
                    >
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
