import React, { useEffect } from "react";
import Brands from "../component/product/Brands";
import Layout from "./../component/layout/layout";
import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductsStore";
import Details from "../component/product/Details";

const ProductDetails = () => {
  const { BrandList, DetailsRequest, ReviewListRequest, BrandListRequest } =
    ProductStore();

  const { id } = useParams();

  useEffect(() => {
    DetailsRequest(id);
    ReviewListRequest(id);
    BrandList === null ? BrandListRequest() : null;
  }, [id]);

  return (
    <Layout>
      <Details />
      <Brands />
    </Layout>
  );
};

export default ProductDetails;
