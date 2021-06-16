import React, { Component } from 'react';
import Header from '../Home/Header/Header';
import './CreateTeam.css';
import human from '../../Assests/human.png';    
import plus from '../../Assests/plus.png';
import right from '../../Assests/right.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CreateTeam extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selectedPlayers:{
                                Id : '',
                                TeamName: '',
                                Captain: '',
                                VCaptain: '',
                                Players : [] 
                            },
            errorMsg: "",
            textBoxError: "",
        }
        this.makeCaptain = this.makeCaptain.bind(this);
        this.makeViceCaptain = this.makeViceCaptain.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
        this.saveTeam = this.saveTeam.bind(this);
    }

    makeCaptain(name) {        
        const splayers = this.state.selectedPlayers;
        if(splayers.VCaptain === name)
            splayers.VCaptain = ""
        splayers.Captain = name;
        this.setState({
            selectedPlayers: splayers
        });
    }
    
    makeViceCaptain(name){
        const splayers = this.state.selectedPlayers;
        if(splayers.Captain === name)
            splayers.Captain = ""
        splayers.VCaptain = name;
        this.setState({
            selectedPlayers:splayers
        })
    }

    selectPlayer(name){
        const splayers = this.state.selectedPlayers;
        if(splayers.Players.length >= 11)
        {
            this.setState({
                errorMsg: "* You have already Selected 11 Players!"
            })

        }
        else{
            splayers.Players.push(name);
            this.setState({
                selectedPlayers:splayers
            })
        }
    }

    removePlayer(name){
        const splayers = this.state.selectedPlayers;
        splayers.Players = splayers.Players.filter(item => item !== name)
        if(splayers.Captain === name)
            splayers.Captain = ""
        if(splayers.VCaptain === name)
            splayers.VCaptain = ""
        this.setState({
            selectedPlayers:splayers
        })
    }

    saveTeam(){
        if(this.state.selectedPlayers.Players.length < 11)
        {
            this.setState({
                errorMsg: "* Please Select 11 Players!"
            })
        }
        else if(this.state.selectedPlayers.Captain === "")
        {
            this.setState({
                errorMsg: "* Please select Captain for the Team!"
            })
        }
        else if(this.state.selectedPlayers.VCaptain === "")
        {
            this.setState({
                errorMsg: "* Please select Vice-Captain for the Team!"
            })
        }
        else if(this.state.selectedPlayers.TeamName === ""){
            this.setState({
                errorMsg: "* Please enter team name!"
            })
        }
        else{
            const splayers = this.state.selectedPlayers;
            if(localStorage.getItem("teams") === null)
            {
                splayers.Id = 1;
                const json = [];
                json.push(JSON.stringify(splayers));
                localStorage.setItem("teams",json);
            }
            else
            {
                const data = localStorage.getItem("teams");
                const teams = JSON.parse(data);
                console.log("team log",Object.keys(teams).length);
                splayers.Id = teams.length;    
            }
        }
    }

    handleTextBoxChange(e){
        if(e.target.value.length < 3)
            this.setState({textBoxError: "* Team name should not have less than 3 characters!"});
        else if(e.target.value.length > 15)
            this.setState({textBoxError: "* Team name should not have more than 15 characters!"});
        else if(!e.target.value.match(/^[a-zA-Z]+$/))
            this.setState({textBoxError: "* Team name should have only alphabets!"});
        else
            this.setState({textBoxError: ""});
            const splayers  = this.state.selectedPlayers;
            splayers.TeamName = e.target.value;
            this.setState({selectedPlayers : splayers});
    }


    render() {
        return (
            <div className="Create_Team">
                <div className="createTeamHeader">
                <div className="header">
                    <Header/>
                </div>
                <button className="home-bt">
                        <Link to="/">
                            Go Back
                        </Link>
                </button>
                </div>
                <div className="Create-Header">
                    <h3>Create Teams</h3>
                </div>   
                <div className="team-select">
                    <input type="text" placeholder="Enter Team Name" onChange={this.handleTextBoxChange.bind(this)}/>
                    <span className="textBoxError"> {this.state.textBoxError} </span>
                    <button onClick={(e) => this.saveTeam()}>
                        Save Team
                    </button>
                </div>
                <div className="players">
                    <div className="players_headers">
                        <h5> Sr.</h5>
                        <h5> Name </h5>
                        <h5 className="error"> {this.state.errorMsg}</h5>
                    </div>
                    <div className="players_all">
                        {this.props.cricPlayers.map((val,key) =>{
                            return <div className="players_row">
                                <div className="sr_no">
                                    {key+1}
                                </div>
                                <div className="player_logo">
                                    <img src={human} alt={val+" Image"}/>
                                </div>
                                <div className="player_name">
                                    {val}
                                </div>
                                <div className="cap_vcap">
                                    {this.state.selectedPlayers.Players.includes(val) ?
                                    <div>
                                        
                                        {this.state.selectedPlayers.Captain === val ?
                                            <span className="captain-h" onClick={(e) => this.makeCaptain(val)}>
                                                C
                                            </span>
                                        :
                                            <span className="captain" onClick={(e) => this.makeCaptain(val)}>
                                                C
                                            </span>

                                        }
                                        {this.state.selectedPlayers.VCaptain === val ?
                                            <span className="vicecaptain-h" onClick={(e) => this.makeViceCaptain(val)}>
                                                VC
                                            </span>
                                        :
                                            <span className="vicecaptain" onClick={(e) => this.makeViceCaptain(val)}>
                                                VC
                                            </span>
                                        }
                                        
                                    </div> 
                                    :
                                    <div>
                                    </div>

                                    }
                                </div>
                                <div className="is_selected">
                                    <div>
                                    {this.state.selectedPlayers.Players.includes(val) ? 
                                        <span className="selected" onClick={(e) => this.removePlayer(val)}>
                                            <img src={right} alt={val+" Selected"}/> Selected
                                        </span>
                                        :
                                        this.state.selectedPlayers.Captain === val ?
                                        <span className="selected" onClick={(e) => this.removePlayer(val)}>
                                            <img src={right} alt={val+" Selected"}/> Selected
                                        </span>
                                        :
                                        this.state.selectedPlayers.VCaptain === val ?
                                        <span className="selected" onClick={(e) => this.removePlayer(val)}>
                                            <img src={right} alt={val+" Selected"}/> Selected
                                        </span>
                                        :
                                        <span className="add" onClick={(e) => this.selectPlayer(val)}> 
                                            <img src={plus}/> Add
                                        </span>
                                    }
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="countAnalysis">
                    {
                    this.state.selectedPlayers.Players.length
                    } &nbsp;
                     Players Selected, &nbsp; 
                    {11 - this.state.selectedPlayers.Players.length} 
                    &nbsp;
                     to Go!
                    
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {
        cricPlayers: state.cricPlayers
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        saveTeam: () => dispatch({type: 'Save Team'})
    }
}



export default connect(
    mapStatetoProps,
    mapDispatchtoProps
) (CreateTeam);
