import React from 'react';

export class Weather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {clima : []};
    }

    componentDidMount(){
        fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": "e1a8ae9040msh5939852ddb578e8p1fa434jsnd3a36652ea12"
	    }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}
}