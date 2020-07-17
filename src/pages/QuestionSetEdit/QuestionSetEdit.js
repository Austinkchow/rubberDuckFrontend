import React, { Component } from 'react'
import QuestionModel from '../../models/question';

class updateQuestionSet extends Component {
    state = {
        name: '',
        currentQuestionSet: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.update(this.state.currentQuestionSet, { name: this.state.name })
            .then((res) => {
                console.log(res)
                this.props.history.push(`/questionSets/${this.state.currentQuestionSet}`)
            })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div className="edit">
                <div className='form'>
                    <div className='form_container'>
                        <h2 className='title'>Update Questions</h2>
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
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default updateQuestionSet;