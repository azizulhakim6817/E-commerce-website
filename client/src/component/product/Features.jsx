import React from "react";
import FeaturesStore from "./../../store/FeaturesStore.jsx";
import FeaturesSkeleton from "./../../skeleton/FeaturesSkeleton.jsx";

const Features = () => {
  const { FeatureList } = FeaturesStore();
  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  } else {
    return (
      <div className="container section">
        <div className="row">
          {FeatureList.map((item, i) => {
            return (
              <div key={i} className="col-6 p-3 col-md-3 col-lg-3 col-sm-6">
                <div className="card shadow-sm ">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <img alt="img" className="w-100" src={item["img"]} />
                      </div>
                      <div className="col-9">
                        <h5 className="bodyXLarge">{item["name"]}</h5>
                        <span className="bodySmal">{item["description"]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Features;
