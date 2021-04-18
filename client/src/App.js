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
      <Route path="/" exact component={Intro}/>  
       <Route path="/home" component={Intro}/>  
       <Route path="/about" component={About}/>  
       <Route path="/projects" component={Projects}/>
       <Route path="/contact" exact component={Contact}/>   
       <Route path="/admin" exact component={Admin}/>    
    </Router>  

  );
}

export default App;