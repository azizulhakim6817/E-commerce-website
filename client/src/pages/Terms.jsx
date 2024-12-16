import React, { useEffect } from "react";
import FeaturesStore from "../store/FeaturesStore";
import Layout from "../component/layout/layout";
import LegalContens from "../component/features/LegalContens";

const Terms = () => {
  const { LegalDetialsRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("terms");
    })();
  }, []);

  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default Terms;
