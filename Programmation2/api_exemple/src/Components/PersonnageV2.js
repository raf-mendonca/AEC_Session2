import React from "react";

export class PersonnageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []};
  }

  componentDidMount(){
    fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
      <ul>
        {Object.keys(this.state.data).map(key => (
          <li key={key}>{key} : {this.state.data[key]}</li>
        ))}
      </ul>
    </div>
    );
  }
}