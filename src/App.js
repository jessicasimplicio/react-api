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
    const options = {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({email: "jessicasimplicio1@gmail.com", password:"banana"})
    };

    fetch("https://peaceful-badlands-98440.herokuapp.com/login", options)
      .then(res => res.json())
      .then(data => console.log(data));
  }

  handleClick() {
    const options = {
      method: "get",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include",
    };

    fetch("https://peaceful-badlands-98440.herokuapp.com/artists", options)
      .then(res => res.json())
      .then(data => this.setState({artists: data}));
  }

  render() {
    return (
      <div>

        {this.state.artists.map(artist => 
          <ArtistCard name={artist.name} genre={artist.genre}/>
        )}

        <Card>
          <button onClick={this.handleClick}>Pegar artistas</button>
        </Card> 
      </div>   
    );
  }
}

export default App;
