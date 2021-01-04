import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages";
import Pets from "./components/Pages/pets";
import Charts from "./components/Pages/Charts";
import Appointments from "./components/Pages/Appointments";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pets" component={Pets} />
        <Route path="/Charts" component={Charts} />
        <Route path="/Appointments" component={Appointments} />
      </Switch>
    </Router>
  );
}

export default App;
