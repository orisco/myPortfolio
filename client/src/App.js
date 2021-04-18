import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';




const App = () => {
  return (
    <Router>
       <Route path="/home" exact component={Intro}/>  
       <Route path="/about" exact component={About}/>  
       <Route path="/projects" exact component={Projects}/>
       <Route path="/contact" exact component={Contact}/>   
       <Route path="/admin" exact component={Admin}/>    
    </Router>  

  );
}

export default App;