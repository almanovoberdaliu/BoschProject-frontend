import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import BoschReels from "./BoschReels";
import SideBar from "./SideBar";

const App = () =>
{
  return (
    <Router>
      <div>
        <SideBar />
      </div>
    </Router>
  );
}

export default App;
