import React, { Component } from 'react';

import './LandingPageQuestion.css';

class QuestionContainer extends Component {
    state = {
        currentIndex: 0
    }

    next = () => {
        if (this.state.currentIndex >= 0 && this.state.currentIndex < this.props.questions.length - 1) {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    };
    previous = () => {
        if (this.state.currentIndex > 0 && this.state.currentIndex < this.props.questions.length) {
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        }
    };
    render() {
        console.log(this.props)
        return (
            <>
                {this.props.questions.length > 0 &&
                    <>
                        <div className='question_number'>
                            <h3>{this.state.currentIndex + 1}/{this.props.questions.length}</h3>
                        </div>
                        <div className='question_container'>
                            <button onClick={this.previous}>Prev</button>
                            <div className='display_question'>
                                <h2>{this.props.questions[this.state.currentIndex]}</h2>
                            </div>
                            <button onClick={this.next}>Next</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default QuestionContainer;