import React, { Component } from 'react';
import "./Team_Box.css";
import delete_icon from "../../../Assests/delete.png";

class Team_Box extends Component {
    render() {
        console.log("props ", this.props);
        return (
            <div className="TeamGroup">
                {this.props.team.map((val, key) =>{
                    return <div className="Team_Box">
                                <h4> {val.TeamName}</h4>
                                <hr/>

                                <h5>Captain: Captain Name</h5>
                                <h5>Vice Captain: Vice-Captain Name</h5>
                                <div className="img-div">
                                <img src={delete_icon} alt="val"/>
                                </div>
                            </div>
                })}
                
            </div>
        )
    }
}

export default Team_Box;
