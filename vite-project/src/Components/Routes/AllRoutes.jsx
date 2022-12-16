import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Appliances from "../../Pages/Appliances";
import Error from "../../Pages/Error";
import Homepage from "../../Pages/Homepage";
import Product from "../../Pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/not-found" element={<Error />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
      
    </Routes>
  );
};

export default AllRoutes;
