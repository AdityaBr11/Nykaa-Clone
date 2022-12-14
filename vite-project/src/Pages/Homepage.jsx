import React from "react";
import {
  Featured,
  Focus,
  Gamezone,
  OnlyatNaykaa,
  Popupstores,
  TopBrand,
} from "../Components/TopBrand";

const Homepage = () => {
  return (
    <div className="text-7xl">
      {/* Homepage */}
      <TopBrand />
      <OnlyatNaykaa />
      <Featured />
      <Focus />
      <Gamezone />
      <Popupstores />
    </div>
  );
};

export default Homepage;
