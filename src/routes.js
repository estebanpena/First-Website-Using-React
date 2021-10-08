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
                <Route exact path='/first-website-using-react' component={Home} />
                <Route path='/first-website-using-react/login' component={Login} />
                <Route path='/first-website-using-react/register' component={Register} />
            </div>
        </Router>
    );
}

export default Routes;