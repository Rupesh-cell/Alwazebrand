import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Component } from "react";
import Work from "./Pages/article";
import Home from "./Pages/Home";
import Insights from "./Pages/Insights";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Insightsprocess from "./Pages/Insightsprocess";






function App (){
  return(
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact activeStyle path="/" element = {<Home/>}/>
          <Route exact activeStyle path="/Work.jsx" element = {<Work/>}/>
          <Route exact activeStyle path="/Insights.jsx" element = {<Insights/>}/>
          <Route exact activeStyle path="/process.jsx" element = {<Process/>}/>
          <Route exact activeStyle path="/article.jsx" element = {<Article/>}/>
          <Route exact activeStyle path="/About.jsx" element = {<About/>}/>
          <Route exact activeStyle path="/Contact.jsx" element= {<Contact/>}/>
          <Route exact activeStyle path="/Insightsprocess.jsx" element = {<Insightsprocess/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
