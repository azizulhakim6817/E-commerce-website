import React, { useEffect } from "react";
import FeaturesStore from "../store/FeaturesStore";
import Layout from "../component/layout/layout";
import LegalContens from "../component/features/LegalContens";

const HowToBuy = () => {
  const { LegalDetialsRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("howtobuy");
    })();
  }, []);

  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default HowToBuy;
