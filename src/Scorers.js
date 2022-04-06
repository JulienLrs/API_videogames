import React, { Component } from "react";
import axios from "axios";


class Scorers extends Component{
    constructor(props){
        super(props);
        this.state = {
            persons: []
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
        axios.get('https://api-football-beta.p.rapidapi.com/players/topscorers', config)
        .then(res => {
            const persons = res.data;
            this.setState({ persons })
            console.log(persons);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World !</h1>
            </div>
        );
    }
}

export default Scorers;
