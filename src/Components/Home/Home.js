import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../Assests/mainLogo.png";
import Header from './Header/Header';
import "./Home.css";
import Team_Box from './Team_Box/Team_Box';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-Header">
                    <div className="Header-Logo">
                        <Header />
                    </div>
                    <button className="create-team-bt">
                        <Link to="/create-team">
                            Create Team
                        </Link>
                    </button>
                </div>
                <div className="MyTeam-Header">
                    <h3>My Teams</h3>
                    <input type="text" placeholder="...Search Team"/>
                </div>
                <div className="Teams">
                    <Team_Box team={this.props.teams}/>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {
        teams: state.teams
    }
}

export default connect(
    mapStatetoProps
) (Home);
