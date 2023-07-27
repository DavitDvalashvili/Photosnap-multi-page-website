import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyles } from "../GlobalStyles";

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
