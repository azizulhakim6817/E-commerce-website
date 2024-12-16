import React from "react";
import LegalContensSkeleton from "../../skeleton/LegalContensSkeleton";
import parse from "html-react-parser";
import FeaturesStore from "../../store/FeaturesStore";

const LegalContens = () => {
  const { LegalDetials } = FeaturesStore();

  if (LegalDetials === null) {
    return <LegalContensSkeleton />;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              {parse(LegalDetials[0]["description"])}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LegalContens;
