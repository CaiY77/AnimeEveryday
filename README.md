# Ani-Manage

This is my anime managing app that allows you to search through different anime titles and genres. Find an anime you like? There is a bookmarking feature added that allows you to keep track of the animes that interest you. Being a fan of anime myself, I enjoy creating anime related things. I have been on many anime websites and the ones that have a database that stores user information have been either too complicated to use or an overkill on features that make it tedious to use. Ani-Mange is an attempt to create an easy to use managing system that allows you to search what you need instantly and have easy access to anime episodes without leaving the page or losing your search results.


## React

Ani-Mange is a React based app that is deployed on Heroku. This application takes usage of JSX/JS, HS, HTML, CSS and also implements the concept of local storage such that on refresh, data on the bookmark page is not lost. This application also takes advantage of some external libraries such as:

* semantic-ui
* semantic-ui-React
* axios
* react-router-dom

The API used in this application is from Jikan. Data is being pulled through GET request.

Base URL:
```javascript
"https://api.jikan.moe/v3"
```

Different Endpoints:
```javascript
"https://api.jikan.moe/v3/search/anime?q={search}&page={page}"
"https://api.jikan.moe/v3/search/manga?q={search}&page={page}"
"https://api.jikan.moe/v3/genre/anime/{search}/1"
"https://api.jikan.moe/v3/genre/manga/{search}/1"
"https://api.jikan.moe/v3/anime/{id}/episodes/{page}"
```
## Minimum Viable Product
* Fetches from Jikan's API.
* Display Searched results

## Additional features
* Search by Manga and/or by Anime
* Search by Genre for both Manga/Anime
* Bookmark Anime/Mangas that you like
* Local storages saves your liked Anime/Manga
* Anime component calls another API to get Episodes data
* Display Episodes on a modal with links to Episodes
* Grab Manga URL from API endpoint

#### My Anime Component (where a lot of the magic happens)
```JSX
<section className="anime-section">

  <img className="anime-img" src={img}></img>
  <h1 className="anime-title">{title}</h1>
  <h3 className="anime-episodes"><Icon name="desktop"/> {episodes} Episode(s)</h3>
  <h3 className="anime-score"><Icon className="yellow" name="star"/> {score} / 10</h3>
  <p className="anime-synopsis">{syn}</p>
  <Favorite
    isFave={isFave}
    favorites={favorites}
    anime={anime}
    handleFavorite={handleFavorite}
  />
  {(episodes > 2)
    ?<Modal className="anime-modal" trigger={<Button onClick={()=>this.fetchEps()}><Icon name="desktop"/>Episode</Button>}>
      <Modal.Content>
        <Episode
          eps={eps}
          inc={this.handleInc}
          dec={this.handleDec}
        />
      </Modal.Content>
    </Modal>
    : <Button><Icon name="close"></Icon>No More</Button>
  }
</section>
```

## Search by Title
<img width="1440" alt="Screen Shot 2019-04-25 at 2 38 37 PM" src="https://user-images.githubusercontent.com/33525692/56759890-f880e500-6767-11e9-923c-b39e218936b0.png">

## Search by Genre
<img width="1440" alt="Screen Shot 2019-04-25 at 2 38 03 PM" src="https://user-images.githubusercontent.com/33525692/56759910-05053d80-6768-11e9-9a91-0a86be71752d.png">

## Anime Search Results
<img width="1440" alt="Screen Shot 2019-04-25 at 3 24 27 AM" src="https://user-images.githubusercontent.com/33525692/56717248-3a7b3e00-670a-11e9-9278-bcf859092ed9.png">

## Manga Search Results
<img width="1440" alt="Screen Shot 2019-04-25 at 3 25 00 AM" src="https://user-images.githubusercontent.com/33525692/56717166-14ee3480-670a-11e9-83b3-971331884eb7.png">

## Episodes Modal
<img width="1431" alt="Screen Shot 2019-04-24 at 11 51 09 PM" src="https://user-images.githubusercontent.com/33525692/56708958-ae0e5280-66ec-11e9-8236-098c6631e31c.png">

## Bookmarks Page
<img width="1440" alt="Screen Shot 2019-04-25 at 3 26 36 AM" src="https://user-images.githubusercontent.com/33525692/56717211-2c2d2200-670a-11e9-8d47-3961646e6adb.png">

## Hierarchy Diagram
<img width="870" alt="Screen Shot 2019-04-25 at 2 12 42 PM" src="https://user-images.githubusercontent.com/33525692/56758276-38de6400-6764-11e9-884e-b6b11f8d3532.png">
