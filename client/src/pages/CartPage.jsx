import React from "react";
import CartList from "./../component/cart/CartList";
import Layout from "./../component/layout/layout";
import Categories from "../component/product/Categories";

const CartPage = () => {
  return (
    <Layout>
      <CartList />
      <Categories />
    </Layout>
  );
};

export default CartPage;
