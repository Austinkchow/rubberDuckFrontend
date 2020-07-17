const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class UserModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    static login(state) {
        return fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(state)
        }).then(res => res.json())
            .catch(err => console.log(err))
    }
    static logout() {
        return fetch(`${REACT_APP_API_URL}/auth/logout`, {
            method: "DELETE",
            credentials: 'include'
        })
    }
    static findMyCollection(userId) {
        return fetch(`${REACT_APP_API_URL}/auth/user/${userId}`).then(res => res.json())
    }
    static show(userId) {
        return fetch(`${REACT_APP_API_URL}/auth/user/${userId}/findUser`).then(res => res.json())
    }
}