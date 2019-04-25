import React, { Component } from 'react';
import Manga from './Manga'
import '../css/SearchResult.css'

class MangaPage extends Component {

  printManga = () => {
    const { mangaResults } = this.props

    const allManga = mangaResults.map(manga=>{
      return <Manga
        title={manga.title}
        img ={manga.image_url}
        chapter={manga.chapters}
        score = {manga.score}
        syn = {manga.synopsis}
        link = {manga.url}
             />
    })
    return allManga;
  }

  render() {
    return (
      <div className ="search-result-style">
        <h1 className="result-style">MY MANGA</h1>
        {this.printManga()}
      </div>
    );
  }

}

export default MangaPage;
