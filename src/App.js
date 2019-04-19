import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import SearchBar from './assets/SearchBar.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      genre: ""
    };
  }

  searchHandle = (event) => {
    this.setState({searchVal: event.target.value});
  }

  fetchSearched = (event) => {
    console.log('HERLERLESOSDKF');
  }

  render() {
    const {searchVal,byGenre} = this.state;
    return (<div>

      <SearchBar
        searchHandle={this.searchHandle}
        fetchSearched={this.fetchSearched}
      />

    </div>);
  }
}

export default App;
