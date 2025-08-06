import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RefProvider } from "./context/useRef";

const BaseLayout = () => {
  return (
    <div className="">
      <RefProvider>
        {/* <Header /> */}
        <Outlet />
      </RefProvider>
    </div>
  );
};

export default BaseLayout;
