import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrackingForm from "./components/TrackingForm";
import TrackingInfo from "./components/TrackingInfo";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TrackingForm} />
        <Route path="/tracking/:trackingNumber" component={TrackingInfo} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}

export default App;
