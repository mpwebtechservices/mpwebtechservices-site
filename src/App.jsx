import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
