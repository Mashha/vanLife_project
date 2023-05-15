import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
