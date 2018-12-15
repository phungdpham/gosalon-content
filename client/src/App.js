import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

import SubmitPage from './pages/Submit';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SubmitPage} />
        {/* <Route exact path="/books" component={Books} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

