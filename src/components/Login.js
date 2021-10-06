import React, { Component } from 'react';
import 'tachyons';
import '../css/Login.css';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    
    change = e => {
      this.setState({
         [e.target.name] : e.target.value 
      })
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        this.props.history.push('/');
    } 

    render() {
        return (
            <div className='tc pa5 '>
            <h1 className='f2 b '>EPLOG SIGNIN</h1>
            <form method='POST'>
                    <br />
                    <input
                        type='email'
                        name='email' 
                        placeholder='email' 
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        type='password'
                        name='password' 
                        placeholder='password' 
                        value={this.state.password} 
                        onChange={e => this.change(e)}
                    />
                    <br />

                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
