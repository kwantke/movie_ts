import React from 'react';
import "./css/style.css"
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Section from './layout/Section';
import Play from "./component/detail/Play";
import Login from "./component/login/Login";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">


        <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/aaa">
          <Header/>
          <Section/>
        </Route>
        <Route path="/play/:movie" component={Play}/>
        {/* Copyright*/}
        <div className="copyright">
          <p>&#169; CarpoolWenon all Right Reserved</p>
        </div>


    </div>
    </BrowserRouter>
  );
}


export default App;
