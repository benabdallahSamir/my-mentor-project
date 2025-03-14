import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function HomeContianer() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default HomeContianer;
