import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";
import AddQuestionForm from "./components/AddQuestionForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/questions">
          <QuestionsPage />
        </Route>
        <Route exact path="/questions/new">
          <AddQuestionForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
