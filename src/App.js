import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import { Provider } from "./components/ConText";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/MAS_portfolio/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;