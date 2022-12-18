import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Components/Routes/AllRoutes";
import Scroll from "./Components/Scroll";
import { useSelector } from "react-redux";

function App() {
  const cartIte = useSelector((store) => store.cart);
  console.log(cartIte);
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
