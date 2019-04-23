import React, { Component } from 'react';
import '../css/SearchResult.css'
import Anime from './Anime'
import Episode from './Episode'
import {Modal} from 'semantic-ui-react'

class Bookmark extends Component {

  printAnime = () => {
    const {favorites, handleFavorite} = this.props;

    const allAnime = favorites.map(anime=>{
      return <Modal trigger={ <div>
        <Anime
          anime={anime}
          key={anime.mal_id}
          img ={anime.image_url}
          title={anime.title}
          episodes = {anime.episodes}
          score = {anime.score}
          syn = {anime.synopsis}
          handleFavorite = {handleFavorite}
          favorites={favorites}
          isFave = "true"
        />
      </div>
      }>
        <Modal.Content>
          <Episode animeID={anime.mal_id} />
        </Modal.Content>
      </Modal>
    })
    return allAnime;
  }

  render() {
    return (
      <div  className ="search-result-style">
        <h1 className="result-style">MY BOOKMARKS</h1>
        {this.printAnime()}
      </div>
    );
  }

}

export default Bookmark;
