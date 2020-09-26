import React from "react";
import '../App.sass';

export class PageNotFound extends React.Component {
  render() {
    return (
      <>
        <img clasName="error404" src={"https://colorlib.com/wp/wp-content/uploads/sites/2/androiddev101-not-found-error-example.jpg"} 
        width="1400px"/>
      </>
    );
  }
}