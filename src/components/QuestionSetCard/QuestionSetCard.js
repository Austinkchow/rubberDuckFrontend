import React from 'react';
import './QuestionSetCard.css'

const QuestionSetCard = (props) => {
    return (
        <div className="questionSetCard">
            <h3>{props.questionSet.name}</h3>
            <h4>Terms: {props.questionSet.questions.length}</h4>
        </div>
    );
}

export default QuestionSetCard;