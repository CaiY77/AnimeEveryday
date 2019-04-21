import {Input, Form, Select, Radio, Button, Icon} from 'semantic-ui-react'
import React, {Component} from 'react';
import '../css/SearchBar.css'

const options = [
  {
    key: 'blah',
    value: 'blah',
    text: 'blah'
  }, {
    key: 'blahh',
    value: 'blahh',
    text: 'blahh'
  }, {
    key: 'blahhh',
    value: 'blahhh',
    text: 'blahhh'
  }
]

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      byGenre: false
    };
  }

  showSearchBar = () => {
    const {fetchSearched, searchHandle,genreHandle,fetchGenre} = this.props;
    const {byGenre} = this.state;
    if (byGenre) {
      return <Form className ="genre-form large" onSubmit={fetchGenre}>
        <Form.Group>
          <Form.Field
            className = "genre-search large"
            control={Select}
            options={options}
            placeholder="Select Genre"
            onChange={(e, { value }) => genreHandle(value)}
          />
          <div className="need-space"></div>
          <Button
            type="submit"
            icon ='search'
            content="Search"
          />
        </Form.Group>
      </Form>
    } else {
      return <Form className="title-search large" onSubmit={() => fetchSearched()}>
        <Input
          label="Find Anime !"
          onChange={searchHandle}
          action={{icon: 'search'}}
          placeholder='Enter Title'
        />
      </Form>
    }
  }

  handleToggle = () => {
    this.setState({
      byGenre: !this.state.byGenre
    });
  }

  render() {

    return (<div className = "search-bar-style">
      <div className ="toggles">
        <Radio toggle="toggle" onClick={this.handleToggle}/>
        {
          (this.state.byGenre)
            ? <h3 className="search-style">Search by Genre !</h3>
            : <h3 className="search-style">Search by Title !</h3>
        }
      </div>
      {this.showSearchBar()}
    </div>);
  }

}

export default SearchBar;
