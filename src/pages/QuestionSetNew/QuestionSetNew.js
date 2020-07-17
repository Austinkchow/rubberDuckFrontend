import React, { Component } from 'react'
import QuestionModel from '../../models/question';

class NewQuestionSet extends Component {
    state = {
        name: '',
        sharePermission: true
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.create(this.state)
            .then(() => {
                this.props.history.push('/questionsets')
            })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div className='new'>
                <div className='form'>
                    <div className='form_container'>

                        <h2 className='title'>Create Questions</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewQuestionSet;