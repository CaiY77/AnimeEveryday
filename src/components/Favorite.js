import React, {Component} from 'react';
import {Button,Icon} from 'semantic-ui-react'

class Favorite extends Component {

  favClick = (e) => {
    e.stopPropagation();
    this.props.handleFavorite(this.props.anime);
  }

  render() {
    const {isFave} = this. props;
    return (<Button toggle
      content = "Like"
      className ="anime-favorite"
      icon = {
        (isFave)
          ? "heart"
          : "heart outline"
      }
      onClick={(e) => {
        this.favClick(e)
      }}
      active={isFave}
            ></Button>);
  }

}

export default Favorite;
