import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Components/Routes/AllRoutes";
import Scroll from "./Components/Scroll";


function App() {
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
