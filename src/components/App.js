import React from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

export default class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}
