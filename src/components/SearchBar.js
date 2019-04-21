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
