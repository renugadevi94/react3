import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Dashboard from './components/Dashboard';
import Buttons from './components/Buttons';
import TopBar from './components/Topbar';
import Cards from './components/Cards';
import Side from './components/Side';
import {Link,Route,BrowserRouter as Router,Routes} from "react-router-dom";

// following three imports for specific import of an fontawesome icon 
// for ex: <FontAwesomeIcon icon={faLaughWink} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faLaughWink } from '@fortawesome/free-regular-svg-icons';
import { faChartArea, faCog, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

// for using default way of including fontawesome icon 
// for ex: <i className="fas fa-laugh-wink"></i>
import '@fortawesome/fontawesome-free/css/all.min.css';

// To install fontawesome
// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
import React from 'react'

//import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
// import {  } from 'react-bootstrap-icons';

function App() {

  return (
    
    <div className="App">
       
    <Router>
    
   <div id="wrapper">
     <Side />
     <div id="content-wrapper" className="d-flex flex-column">
       <div id="content">
        <TopBar/>
        
        
       
         <div className="container-fluid">
         
             <div>
              
             
             <Link to='/dashboard'>dashboard</Link>
             <Link to='/components/buttons'>buttons</Link>
             <Link to='/components/cards'>cards</Link>
             
             </div>
             <Routes>
             <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
             </Routes>
             
             
             </div>
       </div>
       
       
     </div>
   </div>
   </Router>
 </div>   
    
  )
}

export default App