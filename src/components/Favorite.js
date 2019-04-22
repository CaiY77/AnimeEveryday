import React, {Component} from 'react';
import {Button,Icon} from 'semantic-ui-react'

class Favorite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }

  favClick = (e) => {
    e.stopPropagation();
    this.props.handleFavorite(this.props.anime);
  }

  checkForFave = () => {
    this.setState({
      isFave: !this.state.isFave
    });

  }

  render() {
const {isFave} = this.state;
    return (<div>
      <Button
        toggle
        icon = {
          (isFave)
            ? "heart"
            : "heart outline"
        }
        onClick={(e) => {
          this.favClick(e);
          this.checkForFave();
        }}
        active={isFave}
      ></Button>
    </div>);
  }

}

export default Favorite;
