import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Appliances from '../../Pages/Appliances'
import Error from '../../Pages/Error'
import Homepage from '../../Pages/Homepage'
import Productdetails from '../../Pages/Productdetails'
import { Skin } from '../../Pages/Skin'

import Makeup from '../Makeup'
import Product from '../Product'
import Loginpage from '../../Pages/Login';
import Register from '../../Pages/Register';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/appliances' element={<Appliances/>} />
        <Route path='/not-found' element={<Error/>} />
        <Route path='/makeup' element={<Makeup/>} />
        <Route path='/skin' element={<Skin/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:id' element={<Productdetails/>} />

        <Route
        path="*"
        element={<Navigate to="/not-found" replace />}/>
           <Route path='/login' element={<Loginpage />} />
            <Route path='/register' element={<Register />}/>
    </Routes>
  );

};

export default AllRoutes;
