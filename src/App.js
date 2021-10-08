import React from "react";
import News from "./components/news.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact";
import Header from "./components/header.js";
import Profile from "./components/profile.js";
import "./App.css";
import Home from "./components/home.js";
import { Route, Switch } from "react-router";
import Login from "./components/login.js";
 import data from './mon_context'

const App = () => {

  const  state = "bonjour je suis la chaine de caracteres "


  return (
     <div className="container">
       <div className="form-box">
 <Route path="/login">

<Login/>

      </Route>
       </div>
   

</div>


   
  
  );
}

export default App;