import React from 'react'
import { useLocation,useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faMapMarkerAlt,
faSignInAlt,
faSignOutAlt
  } from "@fortawesome/free-solid-svg-icons";
import Logo from '../shared/Profile.png';
import './Navbar.css';

const Navigation = () => {
    let history = useHistory();
    const IsAuth = sessionStorage.getItem('IsAuth')
    useLocation();

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('IsAuth')
        history.push("/login")
    }

    return (
        <div className="header">
            <header className="App-header">
                {IsAuth ? <p1><a onClick={logout} href="blank"><FontAwesomeIcon icon={faSignOutAlt} size="1x" /> Logout</a></p1> : <p1><a href="/login"><FontAwesomeIcon icon={faSignInAlt} size="1x" /> Login</a></p1>}
                <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                <a href="/"><img src={Logo} className="App-logo" alt="" /></a>
                <h1 > Livingstone Inbaraj </h1>
                <div className="flip">
                    <div><div>Full stack web developer</div></div>
                    <div><div>Technical Program Manager</div></div>
                    <div><div>Agile Project Manager</div></div>
                    <div><div>Sr Business Analyst</div></div>
                </div>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /> Kitchener, ON, Canada</p>
                
            </header>
        </div>
    )
}

export default Navigation