import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Routes from './routes';
import MyNavbar from './components/MyNavbar';

const App = () => {
  return (
    <Router basename='/React'>
        <Routes /> 
        <LinkContainer>
            <MyNavbar />
        </LinkContainer>
    </Router>
  ); 
}

export default App;
