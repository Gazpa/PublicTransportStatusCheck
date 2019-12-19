import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ContentRenderer from "./common/ContentRenderer";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="page-container" className="sidebar-visible-lg">
          <Route path={`${this.props.match.url}`} component={Sidebar} />

          <div id="main-container">
            <Route path={`${this.props.match.url}`} component={Navbar} />

            <Switch>
              <Route
                exact
                path={`${this.props.match.url}`}
                component={ContentRenderer}
              />
              <Redirect to="/" />
            </Switch>

            <Route path={`${this.props.match.url}`} component={Footer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
