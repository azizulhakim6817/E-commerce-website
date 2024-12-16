import { useEffect } from "react";
import Layout from "./../component/layout/layout";
import Slider from "./../component/product/Slider";
import Features from "./../component/product/Features";
import Categories from "./../component/product/Categories";
import Products from "./../component/product/Products";
import Brands from "./../component/product/Brands";
import ProductStore from "../store/ProductsStore";
import FeaturesStore from "../store/FeaturesStore";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest("new");
      await BrandListRequest();
    })();
  }, []);

  return (
    <Layout>
      <Slider />
      <Features />
      <Categories />
      <Products />
      <Brands />
    </Layout>
  );
};

export default HomePage;
