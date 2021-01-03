import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
          <Route path="/chats/">
            <Header backbutton="/chat" />
            <Chatscreen />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
