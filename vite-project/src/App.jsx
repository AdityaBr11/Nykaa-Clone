
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Loginpage from './Pages/Login'
import AllRoutes from './Components/Routes/AllRoutes'
import Register from './Pages/Register'
import Signin from './Pages/Signin'

function App()
{

    return (
        <div>
           
                <Navbar />
                <AllRoutes />
                <Footer />
           
            <Loginpage />
            <Register />
            <Signin/>
        </div>
    )
}

export default App
