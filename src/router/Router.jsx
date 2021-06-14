import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../Layout/Header";
import Blogs from "../pages/blogs";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <div id="layout">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/blogs" component={Blogs} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Router;
