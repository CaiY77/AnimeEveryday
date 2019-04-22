import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'
import '../css/SearchResult.css'

class SearchResults extends Component {

  printAnime = () => {
    const {searchResults} = this.props;

    const allAnime = searchResults.map(anime=>{
      return <section className="anime-section" key={anime.mal_id}>
        <img className="anime-img" src={anime.image_url}></img>
        <h1 className="anime-title">{anime.title}</h1>
        <h2><Icon name="desktop"/> {anime.episodes} Episodes</h2>
        <h2><Icon name="star yellow"/> {anime.score} / 10</h2>
        <p className="anime-synopsis">{anime.synopsis}</p>
      </section>
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
