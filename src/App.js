import React, { Component } from 'react';
import './App.css';

import SearchPage from './components/searchpage/SearchPage';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SearchPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
