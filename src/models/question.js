const REACT_APP_API_URL = "https://rubberduckinterviewer.herokuapp.com/api/v1"

export default class QuestionModel {
    static all() {
        return fetch(`${REACT_APP_API_URL}/questions`)
            .then(res => {
                return res.json()
            })
    }

    static show(questionSetId) {
        return fetch(`${REACT_APP_API_URL}/questions/${questionSetId}`).then(res => res.json())
    }

    static create(questionSetData) {
        return fetch(`${REACT_APP_API_URL}/questions/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(questionSetData)
        }).then(res => res.json())
    }

    static update(questionSetId, updateData) {
        return fetch(`${REACT_APP_API_URL}/questions/${questionSetId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        }).then(res => res.json())
    }

    static delete(questionSetId) {
        return fetch(`${REACT_APP_API_URL}/questions/${questionSetId}`, { method: 'DELETE' }).then(res => res.json())
    }

    static addQuestion(questionSetId, addedQuestion) {
        return fetch(`${REACT_APP_API_URL}/questions/${questionSetId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedQuestion)
        }).then(res => res.json())
    }

    static deleteQuestion(questionSetId, deleteQuestionIndex) {
        return fetch(`${REACT_APP_API_URL}/questions/${questionSetId}/deleteQuestion`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleteQuestionIndex)
        }).then(res => res.json())
    }
}