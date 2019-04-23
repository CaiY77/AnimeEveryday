import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import SearchBar from './components/SearchBar.js'
import Bookmark from './components/Bookmark.js'
import SearchResult from './components/SearchResult.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      genre: "",
      searchResults: [],
      favorites: JSON.parse(window.localStorage.getItem('favorites')) || []
    };
  }

  searchHandle = (event) => {
    this.setState({
      searchVal: event.target.value
    });
  }

  genreHandle=(event)=>{
    this.setState({
      genre: event
    });
  }

  fetchSearched = (event) => {
    let url = `https://api.jikan.moe/v3/search/anime?q=${this.state.searchVal}&page=1`
    axios.get(url)
    .then(response => response.data.results)
    .then(data => {
      this.setState({
        searchResults: data
      });
    })
  }

  fetchGenre=(event)=>{
    let url = `https://api.jikan.moe/v3/genre/anime/${this.state.genre}/1`
    axios.get(url)
    .then(response => response.data.anime)
    .then(data=>{
      console.log(data)
      this.setState({
        searchResults: data
      });
    })
  }

  handleFavorite=(anime)=>{
    const {favorites} =this.state;

    const favCopy = favorites.slice();
    const index = favorites.indexOf(anime);

    if (index >= 0){
      favCopy.splice(index,1);
    } else {
      favCopy.push(anime);
    }

    console.log(favCopy);
    this.setState({
      favorites: favCopy
    });

    window.localStorage.clear();
    window.localStorage.setItem('favorites', JSON.stringify(favorites));

  }




  render() {
    const {searchVal,byGenre,searchResults,favorites} = this.state;
    return (<div className ="my-body">
      <nav className="ui massive fluid two item menu">
        <Link to="/" className="item link-style">Find My Anime</Link>
        <Link to="/bookmark" className="item link-style">My Bookmarks</Link>
      </nav>

      <SearchBar
        searchHandle={this.searchHandle}
        fetchSearched={this.fetchSearched}
        genreHandle={this.genreHandle}
        fetchGenre={this.fetchGenre}
      />

      <main>
        <Route exact path="/"
          render={ ()=> <SearchResult
            favorites={favorites}
            searchResults={searchResults}
            handleFavorite={this.handleFavorite}
                        /> }
        />
        <Route path="/bookmark"
          render={()=> <Bookmark
            favorites={favorites}
            handleFavorite={this.handleFavorite}
                       />}
        />
      </main>
    </div>);
  }
}

export default App;
