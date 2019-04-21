import {
  Input,
  Form,
  Select,
  Radio,
  Button,
  Icon
} from 'semantic-ui-react'
import React, {Component} from 'react';
import '../css/SearchBar.css'

const options = [
  {
    key: 1,
    value: 1,
    text: 'Action'
  }, {
    key: 2,
    value: 2,
    text: 'Adventure'
  }, {
    key: 4,
    value: 4,
    text: 'Comedy'
  }, {
    key: 7,
    value: 7,
    text: 'Mystery'
  },{
    key: 8,
    value: 8,
    text: 'Drama'
  }, {
    key: 10,
    value: 10,
    text: 'Fantasy'
  }, {
    key: 11,
    value: 11,
    text: 'Game'
  }, {
    key: 16,
    value: 16,
    text: 'Magic'
  }, {
    key: 18,
    value: 18,
    text: 'Mecha'
  }, {
    key: 22,
    value: 22,
    text: 'Romance'
  }, {
    key: 24,
    value: 24,
    text: 'Sci-Fi'
  }, {
    key: 27,
    value: 27,
    text: 'Shounen'
  }, {
    key: 37,
    value: 37,
    text: 'Supernatural'
  }, {
    key: 38,
    value: 38,
    text: 'Military'
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
    const {fetchSearched, searchHandle, genreHandle, fetchGenre} = this.props;
    const {byGenre} = this.state;

    return (byGenre)
      ? <Form className="genre-form large" onSubmit={fetchGenre}>
        <Form.Group>
          <Form.Field
            className="genre-search large"
            control={Select}
            options={options}
            placeholder="Select Genre"
            onChange={(e, {value}) => genreHandle(value)}
          />
          <div className="need-space"></div>
          <Button type="submit" icon='search' content="Search"/>
        </Form.Group>
      </Form>

      : <Form
        className="title-search large"
        onSubmit={() => fetchSearched()}
        >
        <Input
          label="Search Title"
          onChange={searchHandle}
          action={{icon: 'search'}}
          placeholder='Enter Title'
        />
      </Form>

  }

  handleToggle = () => {
    this.setState({
      byGenre: !this.state.byGenre
    });
  }

  searchBy = () => {
    return (
      (this.state.byGenre)
      ? "Genre"
      : "Title");
  }

  render() {
    return (<div className="search-bar-style">
      <div className="toggles">
        <Radio toggle onClick={this.handleToggle}/>
        <h3 className="search-style">Searching by {this.searchBy()} !</h3>
      </div>
      {this.showSearchBar()}
    </div>);
  }

}

export default SearchBar;
