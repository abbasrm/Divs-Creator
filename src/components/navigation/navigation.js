import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
          <NavLink
            exact={true}
            to="/"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            Gallery
          </NavLink>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default navigation;
