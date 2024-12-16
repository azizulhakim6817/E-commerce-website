import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/layout/layout.jsx";
import ProductStore from "../store/ProductsStore.jsx";
import ProductList from "../component/product/ProductList.jsx";

const ProductByBrand = () => {
  const { ListByBrandRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByBrandRequest(id);
    })();
  }, [id]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByBrand;
