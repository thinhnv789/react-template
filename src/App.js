import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AsyncLoader from './AsyncLoader';
import AppTemplate from './themes/Default';
import './App.css';

const Home = () => import('./pages/Home');
const About = () => import('./pages/About');

class App extends Component {
  render() {
    console.log('device', this.props.device);
    return (
      <Router>
        <AppTemplate>
          <Route path="/" exact={true} component={() => <AsyncLoader moduleProvider={Home} />} />
          <Route path="/about" exact={true} component={() => <AsyncLoader moduleProvider={About} />} />
        </AppTemplate>
      </Router>
    );
  }
}

export default App;
