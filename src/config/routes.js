import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import QuestionSetIndex from '../pages/QuestionSetIndex/QuestionSetIndex'
import QuestionSetShow from '../pages/QuestionSetShow/QuestionSetShow'
import QuestionSetNew from '../pages/QuestionSetNew/QuestionSetNew'
import QuestionSetEdit from '../pages/QuestionSetEdit/QuestionSetEdit'
import QuestionSetDelete from '../pages/QuestionSetDelete/QuestionSetDelete'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'
import Profile from '../pages/Profile/Profile'



const Routes = (props) =>
    !props.currentUser ?
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questionSets/:id' render={(routeComponentProps) => {
                return <QuestionSetShow
                    {...routeComponentProps}
                    currentUser={props.currentUser}
                />
            }} />
            <Route path='/questionSets' component={QuestionSetIndex} />
            <Route path='/user/register' component={Register} />
            <Route path='/user/login' render={(routeComponentProps) => {
                return <Login
                    {...routeComponentProps}
                    currentUser={props.currentUser}
                    storeUser={props.storeUser}
                />
            }} />
        </Switch> :
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questionSets/new' component={QuestionSetNew} />
            <Route path='/questionSets/:id/edit' component={QuestionSetEdit} />
            <Route path='/questionSets/:id/delete' component={QuestionSetDelete} />
            <Route path='/questionSets/:id' render={(routeComponentProps) => {
                return <QuestionSetShow
                    {...routeComponentProps}
                    currentUser={props.currentUser}
                />
            }} />
            <Route path='/questionSets' component={QuestionSetIndex} />
            <Route path='/user/register' component={Register} />
            <Route path='/user/login' render={(routeComponentProps) => {
                return <Login
                    {...routeComponentProps}
                    currentUser={props.currentUser}
                    storeUser={props.storeUser}
                />
            }} />
            <Route path='/user/logout' component={Logout} />
            <Route path='/user/:id' component={Profile} />
        </Switch>
    ;

export default Routes;