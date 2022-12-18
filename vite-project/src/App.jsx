import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Components/Routes/AllRoutes";
import Scroll from "./Components/Scroll";

function App() {

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
