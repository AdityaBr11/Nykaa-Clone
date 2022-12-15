
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Appliances from '../../Pages/Appliances'
import Error from '../../Pages/Error'
import Homepage from '../../Pages/Homepage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/appliances' element={<Appliances/>} />
        <Route path='/not-found' element={<Error/>} />
        <Route
        path="*"
        element={<Navigate to="/not-found" replace />}/>
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../Pages/Homepage";


const AllRoutes = () => {
  return (
    </Routes>
  );
};

export default AllRoutes;
