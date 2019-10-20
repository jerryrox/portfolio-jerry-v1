import React from 'react';
import './App.css';

import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default class App extends React.Component {
  render() {
    return(
      <HashRouter basename="/">
        <div>
          <Header/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </HashRouter>
    );
  }
}
