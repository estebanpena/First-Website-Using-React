import React from 'react';
import { BrowserRouter as Router, 
         Route
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


const Routes = () => {
    return (
        <Router>
            <div>
                <Route exact path='/First-Website-Using-React' component={Home} />
                <Route path='/First-Website-Using-React/login' component={Login} />
                <Route path='/First-Website-Using-React/register' component={Register} />
            </div>
        </Router>
    );
}

export default Routes;