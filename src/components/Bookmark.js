import React, { Component } from 'react';
import '../css/SearchResult.css'
import Anime from './Anime'
import Episode from './Episode'

class Bookmark extends Component {

  printAnime = () => {
    const {favorites, handleFavorite} = this.props;

    const allAnime = favorites.map(anime=>{

      return <Anime
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
    })
    return allAnime;
  }

  render() {
    return (
      <div  className ="search-result-style book-extra">
        <h1 className="result-style">MY BOOKMARKS</h1>
        {this.printAnime()}
      </div>
    );
  }

}

export default Bookmark;
