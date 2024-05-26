import { Outlet } from "react-router-dom";
import { useState } from "react";

// components
import AppBar from "./AppBar/AppBar";
import Sidebar from "./Sidebar/Sidebar";

function View() {
  const [showSidebar, setShowSidebar] = useState();

  return (
    <div>
      <AppBar openMenu={() => setShowSidebar(true)} />
      <Sidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
      <Outlet />
    </div>
  );
}

export default View;
