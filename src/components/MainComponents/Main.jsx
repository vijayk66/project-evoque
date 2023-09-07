import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import Pagination from "./Pagination";

function Main() {
  return (
    <React.Fragment>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <SideContent />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <MainContent />
            <Pagination />
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
