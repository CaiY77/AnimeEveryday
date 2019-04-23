import React, { Component } from 'react';
import { Icon, Button, Modal } from 'semantic-ui-react'
import Favorite from './Favorite'
import Episode from './Episode'
import axios from 'axios'

class Anime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eps:[],
      pages: 0,
      currPage: 1
    } ;
  }

  fetchEps = () =>{
    let url = `https://api.jikan.moe/v3/anime/${this.props.anime.mal_id}/episodes/${this.state.currPage}`;
    axios.get(url)
    .then(response =>response.data)
    .then(data=>{
      this.setState({
        eps: data.episodes,
        pages: data.episodes_last_page
      });
    })
    .catch(e => console.log(`Sorry, ${e}`))
  }

handleInc = () => {
  if (this.state.currPage < this.state.pages) {
    this.setState({
      currPage: this.state.currPage + 1
    })
  }
  this.fetchEps();
}

handleDec = () => {
  if (this.state.currPage > 1) {
    this.setState({
      currPage: this.state.currPage - 1
    })
  }
  this.fetchEps();
}

  render() {
    const{eps,pages} = this.state;
    const {img,title,episodes,score,syn,handleFavorite,anime,favorites,isFave} = this.props
    return (
      <section className="anime-section">

        <img className="anime-img" src={img}></img>
        <h1 className="anime-title">{title}</h1>
        <h3 className="anime-episodes"><Icon name="desktop"/> {episodes} Episode(s)</h3>
        <h3 className="anime-score"><Icon className="yellow" name="star"/> {score} / 10</h3>
        <p className="anime-synopsis">{syn}</p>
        <Favorite
          isFave={isFave}
          favorites={favorites}
          anime={anime}
          handleFavorite={handleFavorite}
        />
        {(episodes > 2)
          ?<Modal className="anime-modal" trigger={<Button onClick={()=>this.fetchEps()}><Icon name="desktop"/>Episode</Button>}>
            <Modal.Content>
              <Episode
                eps={eps}
                inc={this.handleInc}
                dec={this.handleDec}
              />
            </Modal.Content>
          </Modal>
          : <Button><Icon name="close"></Icon>No More</Button>
        }
      </section>
    );
  }

}

export default Anime;
