import React from "react";
import Layout from "../component/layout/layout";
import Brands from "../component/product/Brands";
import WishList from "../component/wish/WishList";

const Wishpage = () => {
  return (
    <Layout>
      <WishList />
      <Brands />
    </Layout>
  );
};

export default Wishpage;
