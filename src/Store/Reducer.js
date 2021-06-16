const initialState = {
    cricPlayers : ['Ravi Kumar', 'Ayush Pasbola', 'Ankush Kumar', 'Robin Adhav', 
                            'Kapil Karandikar', 'Vijay Tambe', 'Rajesh Kumar', 'Lokesh Kumar', 
                            'Hitesh Kumar', 'Vinod Meghwal', 'Khetesh Solanki', 'Manmohan Singh',
                            'Bhaskar Mondal', 'Varun Kumar', 'Albino Braganza', 'Amit Gour',
                            'Jitendra Kumar', 'Dhruv Bhati', 'Jerry Bhati', 'Kishore Kumar' 
                           ],
    teams : [],
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

const reducer = (state = initialState, action) =>{
    const newState = {...state}

    if(action.type == "Save Team"){
        if(newState.selectedPlayers.Players.length < 11)
            newState.errorMsg = "* Please Select 11 Players!"
        else if(newState.selectedPlayers.Captain === "")
            newState.errorMsg = "* Please select Captain for the Team!"
        else if(newState.selectedPlayers.VCaptain === "")
            newState.errorMsg = "* Please select Vice-Captain for the Team!"
        else if(newState.selectedPlayers.TeamName === "")
            newState.errorMsg = "* Please enter team name!"
        else{
            if(newState.teams.length == 0)
                newState.selectedPlayers.Id = 1;
            else
                newState.selectedPlayers.Id = newState.teams.length;
            newState.teams.push(selectedPlayers);
        }
    }
    
    return newState
};

export default reducer;