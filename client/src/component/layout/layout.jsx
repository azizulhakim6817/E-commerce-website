import AppNavbar from "./AppNavbar.jsx";
import Footer from "./footer.jsx";
import ScrollingTop from "./ScrollingTop.jsx";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <>
      <AppNavbar />
      {props.children}
      <ScrollingTop />
      <Toaster position=" botton-center" />
      <Footer />
    </>
  );
};

export default Layout;
