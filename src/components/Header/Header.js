import React from "react"
import { Link } from 'react-router-dom'
import './Header.css'
const Header = (props) => {
    return (
        <header className="topNav">
            <div className="headerIcon">
                <div className="Title">
                    <Link to={'/'}>Rubber Duck Interviewer</Link>
                </div>
            </div>
            <nav>
                <div className="nav__links">
                    {props.currentUser ?
                        <ul>
                            <li><Link to={'/questionSets'}>Question Library</Link></li>
                            <li><Link to={'/questionSets/new'}>Create Questions</Link></li>
                            <li><Link to={`/user/${props.currentUser}`}>My Questions</Link></li>
                            <li><Link to={'/user/logout'}>Logout</Link></li>
                        </ul> :
                        <ul>
                            <li><Link to={'/questionSets'}>Question Library</Link></li>
                            <li><Link to={'/user/register'}>Register</Link></li>
                            <li><Link to={'/user/login'}>Login</Link></li>
                        </ul>}
                </div>
            </nav>
        </header>
    );
}

export default Header