import React, { useEffect } from "react";
import FeaturesStore from "../store/FeaturesStore";
import Layout from "../component/layout/layout";
import LegalContens from "../component/features/LegalContens";

const Privacy = () => {
  const { LegalDetialsRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("privacy");
    })();
  }, []);

  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default Privacy;
