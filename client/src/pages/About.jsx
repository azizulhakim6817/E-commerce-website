import React, { useEffect } from "react";
import Layout from "./../component/layout/layout";
import LegalContens from "../component/features/LegalContens";
import FeaturesStore from "./../store/FeaturesStore";

const About = () => {
  const { LegalDetialsRequest } = FeaturesStore();

  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("about");
    })();
  }, []);

  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default About;
