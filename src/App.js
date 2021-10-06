import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes />  
    </Router>
  ); 
}

export default App;
