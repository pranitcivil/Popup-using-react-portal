import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-4 py-4">
        <Outlet />
      </main>
    </>
  );
};

export default App;
