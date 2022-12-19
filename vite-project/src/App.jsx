import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Components/Routes/AllRoutes";
import Scroll from "./Components/Scroll";

import { useSelector } from "react-redux";
function App() {
  const productData=useSelector(store=>store)
  console.log(productData);
// >>>>>>> cda86cb87b85094b460e83324e8bae04e35b3227

  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
      <Scroll />
    </div>
  );

}

export default App;
