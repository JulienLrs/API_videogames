import React, { Component } from "react";
import axios from "axios";


class Leagues extends Component{
    constructor(props){
        super(props);
        this.state = {
            leagues: []
    }
    }

    componentDidMount(){
        const config = {
        headers: {
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
            'X-RapidAPI-Key': '804ec0126emsh232f6153a5b510bp18cb0djsn804d9f738944'
        },
        params: {id: '61'}
        };
        axios.get('https://api-football-beta.p.rapidapi.com/leagues', config)
        .then(res => {
            this.setState({leagues: res.data })
            // console.log(leagues);
        })
    }

    render(){
        return (
            <p>
                {this.state.leagues.map(oneLeague => 
                <span>{oneLeague.league.name}</span>)}
            </p>
            );
        }
}

export default Leagues;

