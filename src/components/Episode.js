import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'

class Episode extends Component {

printEps = () => {
  const {eps} = this.props
  console.log(eps)

  let epsArr = eps.map(episode =>{
    return (<Card href={episode.video_url} target="_blank">
      <Card.Content>
        <Card.Header>{episode.title}</Card.Header>
        <Card.Meta>{episode.title_japanese}</Card.Meta>
        <Card.Description>Episode : {episode.episode_id}</Card.Description>
      </Card.Content>
    </Card>)
  })
  return epsArr;
}

  render() {
    return (
      <div>
        {this.printEps()}
      </div>
    );
  }

}

export default Episode;
