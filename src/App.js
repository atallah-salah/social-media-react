import React from "react";
import "./App.css";

// import dependencies
import { Route, BrowserRouter as Router } from "react-router-dom";

// import pages
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";

// import components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Route path="/" component={Main} exact />
          <Route path="/auth" component={Auth} exact />
        </div>
      </Router>
    </>
  );
}

export default App;
