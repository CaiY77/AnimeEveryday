import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'
import Favorite from './Favorite'
class Manga extends Component {

  render() {
    const { title,img,chapter,score,syn,link,manga,handleFavorite,favorites,isFave} = this.props
    return (
      <section className="anime-section">

        <img className="anime-img" src={img}></img>
        <h1 className="anime-title">{title}</h1>
        <h3 className="anime-episodes"><Icon name="book"/> {chapter} Chapter(s)</h3>
        <h3 className="anime-score"><Icon className="yellow" name="star"/> {score} / 10</h3>
        <p className="anime-synopsis">{syn}</p>
        <Favorite
          isFave={isFave}
          favorites={favorites}
          anime={manga}
          handleFavorite={handleFavorite}
         />
        <Button className="anime-modal" href={link} target="_blank"><Icon name="linkify"></Icon>View</Button>
      </section>
    );
  }

}

export default Manga;
