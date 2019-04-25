import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'
class Manga extends Component {

  render() {
    const { title,img,chapter,score,syn,link } = this.props
    return (
      <section className="anime-section">

        <img className="anime-img" src={img}></img>
        <h1 className="anime-title">{title}</h1>
        <h3 className="anime-episodes"><Icon name="book"/> {chapter} Chapter(s)</h3>
        <h3 className="anime-score"><Icon className="yellow" name="star"/> {score} / 10</h3>
        <p className="anime-synopsis">{syn}</p>
        <Button className="anime-favorite" href={link} target="_blank"><Icon name="linkify"></Icon>View</Button>
        <Button className="anime-modal">Testing 2</Button>
      </section>
    );
  }

}

export default Manga;
