import React, { Component } from 'react'
import UserModel from '../../models/user';

class Logout extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        UserModel.logout()
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div className='logout'>
                <div className='form'>
                    <div className='form_container'>
                        <h2 className='title'>Logout ?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <button type="submit">Yes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logout;