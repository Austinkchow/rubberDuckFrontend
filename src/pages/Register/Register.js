import React, { Component } from 'react'
import UserModel from '../../models/user'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
            .then(data => {
                console.log(data)
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                })

                this.props.history.push('user/login')
            })
    }

    render() {
        return (
            <div className="register">
                <div className='form'>
                    <div className='form_container'>
                        <h4 className='title'>Register</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">User Name</label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                />
                            </div>

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
                                <label htmlFor="name">Password</label>
                                <input
                                    onChange={this.handleChange}
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password} />
                            </div>

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Register;
