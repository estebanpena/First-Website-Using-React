import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import MyNavbar from './components/MyNavbar';

const App = () => {
  return (
    <Router>
        <MyNavbar />
        <Routes /> 
    </Router>
  ); 
}

export default App;
