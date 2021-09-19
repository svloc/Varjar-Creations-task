import React, { useState, useEffect } from "react";
import "./style.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import PrivateRoute from "./components/privateRoute.js";
export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <PrivateRoute path="/todo" component={Todo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
