import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import AddQuestionForm from "./components/AddQuestionForm";
import Register from "./components/Register";
import HomeBanner from "./components/HomeBanner";
import HomeWelcome from "./components/HomeWelcome";
import TestHome from "./components/TestHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar authenticated={authenticated} />
          <HomeBanner />
          <HomeWelcome />
          <TestHome />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions/new">
          <AddQuestionForm authenticated={authenticated}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
