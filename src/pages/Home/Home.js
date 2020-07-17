import React, { Component } from 'react';
import QuestionModel from '../../models/question'
import QuestionContainer from '../../components/LandingPageQuestions/LandingPageQuestions'

import './Home.css'

class Home extends Component {
    state = {
        questionSets: [],
        selectedQuestionSetId: 0,
        selectedQuestionSet: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        QuestionModel.all().then(data => {
            this.setState({ questionSets: data.questionSet })
        })
    }

    onChange = (event) => {
        this.setState({ selectedQuestionSetId: event.target.value }, this.selectedQuestionSet)
    }

    selectedQuestionSet = () => {
        QuestionModel.show(this.state.selectedQuestionSetId).then(data => {
            console.log(data)
            this.setState({ selectedQuestionSet: data.questionSet.questions })
        })
    }
    render() {

        return (
            <div>
                <QuestionContainer questions={this.state.selectedQuestionSet} />
                <img src='/96-967025_duck-transparent-ducky-rubber-duck-transparent-background.png' alt='Rubber Duck img'></img>
                <div className="select">
                    <select onChange={this.onChange} name="questionSet" >
                        <option>Select Your Interview Questions</option>
                        {this.state.questionSets.length > 0 && this.state.questionSets.map(questionSet => {
                            return (
                                <option value={`${questionSet._id}`}>{`${questionSet.name}`}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        );
    }
};

export default Home;
