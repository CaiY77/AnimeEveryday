import React, {Component} from 'react';
import {Button,Icon} from 'semantic-ui-react'

class Favorite extends Component {

  favClick = (e) => {
    e.stopPropagation();
    this.props.handleFavorite(this.props.anime);
  }

  render() {
    const {isFave} = this. props;
    return (<div className ="anime-favorite">
      <Button toggle
        content = "  Bookmark"
        icon = {
          (isFave)
            ? "heart"
            : "heart outline"
        }
        onClick={(e) => {
          this.favClick(e)
        }}
        active={isFave}
      ></Button>
    </div>);
  }

}

export default Favorite;
