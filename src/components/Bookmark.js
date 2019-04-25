import React, { Component } from 'react';
import '../css/SearchResult.css'
import Anime from './Anime'
import Manga from './Manga'
import Episode from './Episode'

class Bookmark extends Component {

  printAnime = () => {
    const {favorites, handleFavorite} = this.props;

    const allAnime = favorites.map(stuff=>{
      if('volumes' in stuff){
        return <Manga
          manga={stuff}
          title={stuff.title}
          img ={stuff.image_url}
          chapter={stuff.chapters}
          score = {stuff.score}
          syn = {stuff.synopsis}
          link = {stuff.url}
          handleFavorite = {handleFavorite}
          isFave = "true"
               />
      } else {

      return <Anime
        anime={stuff}
        key={stuff.mal_id}
        img ={stuff.image_url}
        title={stuff.title}
        episodes = {stuff.episodes}
        score = {stuff.score}
        syn = {stuff.synopsis}
        handleFavorite = {handleFavorite}
        favorites={favorites}
        isFave = "true"
             />
           }
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
