import React, { useEffect } from "react";
import Layout from "../component/layout/layout";
import LegalContens from "../component/features/LegalContens";
import FeaturesStore from "../store/FeaturesStore";

const Contact = () => {
  const { LegalDetialsRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("contact");
    })();
  }, []);

  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default Contact;
