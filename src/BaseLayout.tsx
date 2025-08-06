import { Outlet } from "react-router-dom";

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
