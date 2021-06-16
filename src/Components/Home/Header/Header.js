import React from 'react';
import logo from '../../../Assests/mainLogo.png';
import './Header.css';

export default function Header() {
    return (
        <div className="Home-Header">
            <img src={logo} alt="logo"/>
            <h1> QuestionPro Fantasy Team</h1>
        </div>
    )
}
