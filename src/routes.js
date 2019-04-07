import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Edit from "./components/edit/edit";
import Gallery from "./components/gallery/gallery";
import Navigation from "./components/navigation/navigation";

const routes = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/" component={Home} />
    </Switch>
  </>
);

export default routes;
