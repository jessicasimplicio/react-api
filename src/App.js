import React, { Component } from 'react';
import Card from './Card.js'
import ArtistCard from './ArtistCard.js'
import './App.css';
import './ArtistCard.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const BASE_URL = "https://peaceful-badlands-98440.herokuapp.com";
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({email: "jessicasimplicio1@gmail.com", password:"banana"})
    };

    fetch(BASE_URL+"/login", options)
      .then(res => {
        const options = {
          method: "get",
          headers: {
          "Content-type": "application/json"
          },
          credentials: "include",
        };

        fetch(BASE_URL+"/artists", options)
          .then(res => res.json())
          .then(data => this.setState({artists: data}));  
      })
  }

  handleClick() {
    
  }

  render() {
    return (
      <div>

        {this.state.artists.map(artist => 
          <ArtistCard name={artist.name} genre={artist.genre} id={artist.id}/>
        )}

        <Card>
          <button onClick={this.handleClick}>Pegar artistas</button>
        </Card> 
      </div>   
    );
  }
}

export default App;
