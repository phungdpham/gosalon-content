import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

import SubmitPage from './pages/Submit';
import ThankYou from './pages/ThankYou';
import ContentSubmitted from './pages/WebContent';
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/submit" component={SubmitPage} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/contents" component={ContentSubmitted} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

