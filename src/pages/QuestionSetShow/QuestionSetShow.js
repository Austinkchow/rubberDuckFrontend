import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';
import UserModel from '../../models/user'
import QuestionTable from '../../components/QuestionTable/QuestionTable';

import './QuestionSetShow.css'

class QuestionSetShow extends Component {
    state = {
        currentQuestionSet: this.props.match.params.id,
        isAuthor: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        QuestionModel.show(this.state.currentQuestionSet).then(data => {
            this.setState({ questionSet: data.questionSet }, this.checkUser)
        })
    }

    checkUser = () => {
        UserModel.show(this.props.currentUser).then(data => {
            console.log(data.foundUser.questionSet)
            console.log(this.state.currentQuestionSet)
            this.setState({ isAuthor: data.foundUser.questionSet.includes(this.state.currentQuestionSet) })
        })
    }
    render() {
        console.log(this.state.isAuthor)
        return (
            <div className='show'>
                <div>
                    <h2>{this.state.questionSet && this.state.questionSet.name}</h2>
                </div>
                {this.state.isAuthor ?
                    <div className='edit'>
                        {this.state.questionSet &&
                            <><Link to={`/questionSets/${this.state.currentQuestionSet}/edit`}>Question Set Edit</Link>
                                <Link to={`/questionSets/${this.state.currentQuestionSet}/delete`}>Question Set Delete</Link></>
                        }
                    </div> : <div></div>}
                < div >
                    {this.state.questionSet && <QuestionTable questionSet={this.state.questionSet} isAuthor={this.state.isAuthor} />}
                </div >
            </div>
        )
    }
}
export default QuestionSetShow