import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductByBrand from "./pages/ProductByBrand.jsx";
import ProductByCategory from "./pages/ProductByCategory.jsx";
import ProductByKeyword from "./pages/ProductByKeyword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import About from "./pages/About";
import Refund from "./pages/Refund";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HowToBuy from "./pages/HowToBuy";
import Complain from "./pages/Complain";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import Wishpage from "./pages/Wishpage";
import OrderPage from "./pages/OrderPage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";
import { useEffect } from "react";

const App = () => {
  function ScrollToTopOnNavigation() {
    const { pathname } = useLocation();
    useEffect(() => {
      const scroll = () => {
        window.scrollTo(0, 0);
      };
      requestAnimationFrame(scroll);
    }, [pathname]);
    return null;
  }
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-brand/:id" element={<ProductByBrand />} />
        <Route path="/by-category/:id" element={<ProductByCategory />} />
        <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/Details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wish" element={<Wishpage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/invoice/:id" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
