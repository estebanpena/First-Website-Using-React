import React, { Component } from 'react';

class Register extends Component {
    constructor () {
        super()
        this.state = {
            email : '',
            username: '',
            password : ''
        }
    }

    change = e => {
        this.setState({
           [e.target.name] : e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState ({
            email : '',
            username: '',
            password : ''
        })
    }
    render() {
        return (
            <div className='tc pa5 '>
            <h1 className='f2 b '>EPLOG REGISTER</h1>
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
                        type='username'
                        name='username' 
                        placeholder='username' 
                        value={this.state.username}
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

export default Register;