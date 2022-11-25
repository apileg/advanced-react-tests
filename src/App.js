import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
      <Navbar />
    </div>
  );
};

export default App;
