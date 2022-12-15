import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import {
  BrandSlider,
  EditorC,
  Essential,
  FabSec,
  TopSlider,
} from "../Components/Slider";
import {
  Beautyadvice,
  Featured,
  Gamezone,
  OnlyatNaykaa,
  Popupstores,
  TopBrand,
} from "../Components/TopBrand";

const Homepage = () => {
  return (
    <div>
      <TopSlider />
      <TopBrand />
      <OnlyatNaykaa />
      <FabSec />
      <Featured />
      <Essential />
      <BrandSlider />
      <Gamezone />
      <Popupstores />
      <EditorC />
      <Beautyadvice />
    </div>
  );
};

export default Homepage;
