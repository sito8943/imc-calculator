import { Outlet } from "react-router-dom";

// components
import AppBar from "./AppBar/AppBar";

function View() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default View;
