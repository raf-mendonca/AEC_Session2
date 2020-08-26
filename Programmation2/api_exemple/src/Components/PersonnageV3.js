import React from "react";

export class PersonnageV3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []};
  }

  async componentDidMount(){
      const response = await fetch('https://swapi.dev/api/people/1/');
      const json = await response.json();
      this.setState({ data: json });
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