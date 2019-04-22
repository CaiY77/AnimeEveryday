import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'
import Favorite from './Favorite'

class Anime extends Component {

  render() {
    const {img,title,episodes,score,syn,handleFavorite,anime,favorites} = this.props
    return (
      <section className="anime-section">
        <img className="anime-img" src={img}></img>
        <h1 className="anime-title">{title}</h1>
        <h3 className="anime-episodes"><Icon name="desktop"/> {episodes} Episode(s)</h3>
        <h3 className="anime-score"><Icon className="yellow" name="star"/> {score} / 10</h3>
        <p className="anime-synopsis">{syn}</p>
        <Favorite favorites={favorites} anime={anime} handleFavorite={handleFavorite} className="anime-favorite" />
      </section>
    );
  }

}

export default Anime;
