import {Input, Form} from 'semantic-ui-react'
import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      byGenre: false
    };
  }

  showSearchBar = () => {
    const {fetchSearched, searchHandle} = this.props;
    const {byGenre} = this.state;

    if (byGenre) {
      return <h1>HI</h1>
    } else {
      return <Form onSubmit={() => fetchSearched()}>
        <Input
          label="Find Anime !"
          onChange={searchHandle}
          action={{icon: 'search'}}
          placeholder=''
        />
      </Form>
    }
  }

  render() {

    return (<div>
      {this.showSearchBar()}
    </div>);
  }

}

export default SearchBar;
