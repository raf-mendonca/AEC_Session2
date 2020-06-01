import React from '../../../node_modules/react';
import ReactDOM from '../../../node_modules/react-dom'; 
import { Enfant } from './Enfant'; 
import { Ami } from './Ami';
 
export class Parent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { name: 'Patate' }; 
    this.changeName = this.changeName.bind(this); 
} 
 
  changeName(newName) { 
    this.setState({name: newName}); 
  } 
 
  render() { 
    return ( 
      <> 
        <Enfant onChange={this.changeName} /> 
        <Ami name={this.state.name} /> 
      </> 
    ); 
  } 
} 