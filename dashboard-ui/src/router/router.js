import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import RecordDetails from "../routes/recordDetails/RecordDetails";
import Registration from "../routes/registration/RegistrationComponent";
import Header from "../header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/registration" component={Registration} />
        <Route  path="/recordDetails" component={RecordDetails} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
