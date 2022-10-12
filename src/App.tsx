import React from 'react';
import "./css/style.css"
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Section from './layout/Section';
import Play from "./component/detail/Play";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Section/>
        </Route>
        <Route path="/play/:movie" component={Play}/>

      </Switch>
      {/* Copyright*/}
      <div className="copyright">
        <p>&#169; CarpoolWenon all Right Reserved</p>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
