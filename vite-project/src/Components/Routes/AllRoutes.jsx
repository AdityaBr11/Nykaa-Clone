
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Appliances from '../../Pages/Appliances'
import Error from '../../Pages/Error'
import Homepage from '../../Pages/Homepage'
import Practice from '../../Pages/Practice'
import SinglePractice from '../../Pages/SinglePractice'
import { Skin } from '../../Pages/Skin'
import Makeup from '../Makeup'
import Product from '../Product'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/appliances' element={<Appliances/>} />
        <Route path='/not-found' element={<Error/>} />
        <Route path='/makeup' element={<Makeup/>} />
        <Route path='/skin' element={<Skin/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/practice' element={<Practice/>} />
        <Route path='/practice:id' element={<SinglePractice/>} />
        <Route
        path="*"
        element={<Navigate to="/not-found" replace />}/>
    </Routes>
  );
};

export default AllRoutes;
