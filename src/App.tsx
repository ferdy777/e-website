import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
import Header from "./components/common/header";
import Sidebar from "./components/common/sidebar";
import Footer from "./components/common/footer";
import ViewCart from "./pages/viewCart.tsx";
import Checkout from "./pages/checkout/index.tsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/viewcart" element={<ViewCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
