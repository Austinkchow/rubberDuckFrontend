import React, { Component } from 'react'
import QuestionModel from '../../models/question';
import './QuestionSetDelete.css'
class deleteQuestionSet extends Component {
    state = {
        currentQuestionSet: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.delete(this.state.currentQuestionSet)
            .then(() => {
                this.props.history.push('/questionSets')
            })
    }

    render() {
        return (
            <div className='delete'>
                <div className='form'>
                    <div className='form_container'>
                        <h2 className='title'>Are you sure you want to delete ?</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <button type="submit">Yes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default deleteQuestionSet;