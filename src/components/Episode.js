import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'

class Episode extends Component {

printEps = () => {
  const {eps} = this.props
  console.log(eps)

  let epsArr = eps.map(episode =>{
    return <h1>{episode.title}</h1>
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
