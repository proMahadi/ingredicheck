import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import Copyright from "../components/shared/Copyright/Copyright";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <ScrollRestoration />
        <Outlet />
      </main>

      <footer>
        <Footer/>
        <Copyright/>
      </footer>
    </>
  );
};

export default RootLayout;
