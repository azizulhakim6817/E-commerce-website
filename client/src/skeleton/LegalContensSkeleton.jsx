import React from "react";
import Skeleton from "react-loading-skeleton";

const LegalContensSkeleton = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} count={2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalContensSkeleton;
