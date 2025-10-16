import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Demo1App from "./animations/demo1/src/index";
import Demo2App from "./animations/demo2/src/index";
import Demo3App from "./animations/demo3/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <div></div>} />
            <Route path="/demo1" component={Demo1App} />
            <Route path="/demo2" component={Demo2App} />
            <Route path="/demo3" component={Demo3App} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;