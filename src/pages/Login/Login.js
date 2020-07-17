import React, { Component } from 'react'
import UserModel from '../../models/user'
import { withRouter } from 'react-router-dom'
import './Login.css'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        UserModel.login(this.state)
            .then(data => {
                console.log(data)
                if (!data.user) {
                    return false
                }
                this.props.storeUser(data.user.id)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='form'>
                <div className='form_container'>
                    <h4 className='title'>Login</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                                onChange={this.handleChange}
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={this.handleChange}
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password} />

                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
