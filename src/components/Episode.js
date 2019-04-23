import React, { Component } from 'react';
import {Card, Button,Icon} from 'semantic-ui-react'

class Episode extends Component {

printEps = () => {
  const {eps} = this.props

  let epsArr = eps.map(episode =>{
    return (<Card
      raised
      href={episode.video_url}
      target="_blank"
      className="a-card"
            >
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
    const {inc, dec}= this.props
    return (
      <div>
        <div className="my-butt-top">
          <Button onClick={()=>{dec()}} icon labelPosition='left'>
            <Icon name='left arrow' />
            Previous
          </Button>
          <Button onClick={()=>inc()} icon labelPosition='right'>
            Next
            <Icon name='right arrow' />
          </Button>
        </div>
        <Card.Group itemsPerRow={4}>
          {this.printEps()}
        </Card.Group>
        <div className="my-butt-bot">
          <Button onClick={()=>{dec()}} icon labelPosition='left'>
            <Icon name='left arrow' />
            Previous
          </Button>
          <Button onClick={()=>inc()} icon labelPosition='right'>
            Next
            <Icon name='right arrow' />
          </Button>
        </div>
      </div>
    );
  }

}

export default Episode;
