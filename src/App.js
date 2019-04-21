import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import SearchBar from './components/SearchBar.js'
import Bookmark from './components/Bookmark.js'
import SearchResult from './components/SearchResult.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      genre: "",
      searchResults: []
    };
  }

  searchHandle = (event) => {
    this.setState({searchVal: event.target.value});
  }

  genreHandle=(event)=>{
    this.setState({
      genre: event
    });
  }

  fetchSearched = (event) => {
    console.log('name search');
  }
  fetchGenre=(event)=>{
console.log("genre search");
  }





  render() {
    const {searchVal,byGenre} = this.state;

    return (<div>
      <nav className="ui massive fluid two item menu">
        <Link to="/" className="item">Find My Anime</Link>
        <Link to="/bookmark" className="item">My Bookmarks</Link>
      </nav>

      <SearchBar
        searchHandle={this.searchHandle}
        fetchSearched={this.fetchSearched}
        genreHandle={this.genreHandle}
        fetchGenre={this.fetchGenre}
      />

      <main>
        <Route exact path="/" component={SearchResult}/>
        <Route path="/bookmark" component={Bookmark}/>
      </main>
    </div>);
  }
}

export default App;
