import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import QuestionSetCard from '../../components/QuestionSetCard/QuestionSetCard'
import QuestionModel from '../../models/question'
import UserModel from '../../models/user'

class Profile extends Component {
    state = {
        questionSets: [],
        currentUser: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        UserModel.findMyCollection(this.state.currentUser).then(data => {
            this.setState({ questionSets: data.foundUser.questionSet })
        })
    }


    render() {
        const QuestionSetIndex = this.state.questionSets.map((questionSet, index) => {
            console.log(questionSet)
            return (
                <Link to={`/questionSets/${questionSet._id}`} key={index}>
                    <QuestionSetCard questionSet={questionSet} />
                </Link>
            )
        })
        return (
            <div>
                <h1>My collection</h1>
                <div className='questionSetContainer'>
                    {this.state.questionSets.length ? QuestionSetIndex : 'Loading...'}
                </div>
            </div >
        );
    }
}

export default Profile;