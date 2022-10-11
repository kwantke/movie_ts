import React from 'react';

// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Section from './layout/Section';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Section/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
