//Le headers est optionnel.
//On change le contenu du body pour ce qu'on désire envoyer à l'API. 
import React from "react";

export class ShortenURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {longURL : "https://www.youtube.com/watch?v=3VmtibKpmXI", shortURL : ""};
  }

  componentDidMount(){
    const apiKey = "4c765514b67a471785cd48ed365106ab"; 
    const getData = async () => { 
    try{ 
      console.log("try");
        const response = await fetch('https://api.rebrandly.com/v1/links', { 
          method:'POST', 
          headers: {'Content-Type': 'application/json','apikey': apiKey  }, 
          body:JSON.stringify({destination: this.state.longURL }) 
        }); 
        if(response.ok){ 
          const jsonResponse = await response.json(); 
          console.log(jsonResponse);
          this.setState({shortURL : jsonResponse.shortUrl});
          return jsonResponse; 
        } 
        throw new Error('Request failed!'); 
    } 
    catch(error){ 
      console.log(error); 
    } 
} 
getData();
}

render() {
  return (
    <>
    <h1>rebrandly</h1>
    <h2>{this.state.shortURL}</h2>
    </>
  );
}
}