import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionSetCard from '../../components/QuestionSetCard/QuestionSetCard'
import QuestionModel from '../../models/question'

import './QuestionSetIndex.css'

class QuestionSetIndex extends Component {
    state = {
        questionSets: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        QuestionModel.all().then(data => {
            this.setState({ questionSets: data.questionSet })
        })
    }

    render() {
        let QuestionSetIndex = this.state.questionSets.map((questionSet, index) => {
            return (
                <Link to={`/questionSets/${questionSet._id}`} key={index}>
                    <QuestionSetCard questionSet={questionSet} />
                </Link>
            )
        })
        return (
            <div className='main'>
                <h1>Interview Question Library</h1>
                <div className='questionSetContainer'>
                    {this.state.questionSets ? QuestionSetIndex : 'Loading...'}
                </div>
            </div >
        );
    }
}

export default QuestionSetIndex;