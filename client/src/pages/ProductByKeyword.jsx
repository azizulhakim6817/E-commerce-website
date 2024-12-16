import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductsStore";
import ProductList from "../component/product/ProductList";
import Layout from "../component/layout/layout";

const ProductByKeyword = () => {
  const { ListByKeywordRequest } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByKeyword;
