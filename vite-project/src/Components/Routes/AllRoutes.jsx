
import React from 'react'
import {Navigate,Route,Routes} from 'react-router-dom'
import Appliances from '../../Pages/Appliances'
import Error from '../../Pages/Error'
import Homepage from '../../Pages/Homepage'
import Loginpage from '../../Pages/Login'
import Register from '../../Pages/Register'
import Signin from '../../Pages/Signin'

const AllRoutes=() =>
{
    return (
        <Routes>
            <Route path='/' exact element={<Homepage />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/not-found' element={<Error />} />
            <Route
                path="*"
                element={<Navigate to="/not-found" replace />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/register' element={<Register />}/>
            <Route path='/signin' element={<Signin/>}/>
        </Routes>
    )
};

export default AllRoutes;
