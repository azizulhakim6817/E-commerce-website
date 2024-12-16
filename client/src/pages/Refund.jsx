import { useEffect } from "react";
import Layout from "../component/layout/layout";
import FeaturesStore from "../store/FeaturesStore";
import LegalContens from "./../component/features/LegalContens";

const Refund = () => {
  const { LegalDetialsRequest } = FeaturesStore();
  useEffect(() => {
    (async () => {
      await LegalDetialsRequest("refund");
    })();
  }, []);
  return (
    <Layout>
      <LegalContens />
    </Layout>
  );
};

export default Refund;
