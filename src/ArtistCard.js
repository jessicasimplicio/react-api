import React from 'react';
import './ArtistCard.css';



class ArtistCard extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      tracks:[]
    }

    this.getArtistTracks = this.getArtistTracks.bind(this);
  }

  getArtistTracks(event) {

    const BASE_URL = "https://peaceful-badlands-98440.herokuapp.com";
    const options = {
      method: "get",
      headers: {
      "Content-type": "application/json"
      },
      credentials: "include",
    };

    fetch(`${BASE_URL}/artists/${this.props.id}/tracks`, options)
      .then(res => res.json())
      .then(data => {

        if(data.length === 0){
          this.setState({tracks: [{title: "Não tem nada"}]});
        } else {
          this.setState({tracks: data})
        }
      });  
  }

  render(){
    return (
      <div className="my-card">
        <h1>{this.props.name}</h1>
        <h2>{this.props.genre}</h2>
        <button data-id={this.props.id} onClick={this.getArtistTracks}>
          Ver músicas
        </button>
        <ul>
          {this.state.tracks.map(track => <li>{track.title}</li>)}
        </ul>
      </div>
    );
  }
  
}

export default ArtistCard;
