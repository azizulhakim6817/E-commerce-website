import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import ProductList from "../component/product/ProductList.jsx";
import Layout from "./../component/layout/layout.jsx";
import ProductStore from "../store/ProductsStore.jsx";

const ProductByCategory = () => {
  const { ListByCategoryRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByCategoryRequest(id);
    })();
  }, [id]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByCategory;
