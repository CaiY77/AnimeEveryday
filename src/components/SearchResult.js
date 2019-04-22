import React, {Component} from 'react';
import { Icon, Button } from 'semantic-ui-react'
import Anime from './Anime'
import '../css/SearchResult.css'

class SearchResults extends Component {

  printAnime = () => {
    const {searchResults,handleFavorite,favorites} = this.props;

    const allAnime = searchResults.map(anime=>{
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
             />
    })
    return allAnime;
  }

  render() {
    return (<div className ="search-result-style">
      {this.printAnime()}
    </div>);
  }

}

export default SearchResults;
