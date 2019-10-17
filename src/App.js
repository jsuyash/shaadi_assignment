import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./PageRoutes";
import "./App.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
