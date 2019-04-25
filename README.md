# Ani-Manage

This is my anime managing app that allows you to search through different anime titles and genres. Find an anime you like? There is a bookmarking feature added that allows you to keep track of the animes that interest you. Being a fan of anime myself, I enjoy creating anime related things. I have been on many anime websites and the ones that have a database that stores user information have been either too complicated to use or an overkill on features that make it tedious to use. Ani-Mange is an attempt to create an easy to use managing system that allows you to search what you need instantly and have easy access to anime episodes without leaving the page or losing your search results.


## React

Ani-Mange is a React based app that is deployed on Heroku. This application takes usage of JSX/JS, HS, HTML, CSS and also implements the concept of local storage such that on refresh, data on the bookmark page is not lost. This application also takes advantage of some external libraries such as:

#### semantic-ui
#### semantic-ui-React
#### axios
#### react-router-dom

The API used in this application is from Jikan. Data is being pulled through GET request.

Base URL:
```javascript
"https://api.jikan.moe/v3"
```

Different Endpoints:
```javascript
"https://api.jikan.moe/v3/search/anime?q={search}&page={page}"
"https://api.jikan.moe/v3/search/manga?q={search}&page={page}"
"https://api.jikan.moe/v3/anime/{id}/episodes/{page}"
"https://api.jikan.moe/v3/genre/anime/{search}/1"
```

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

## Landing Page
<img width="1440" alt="Screen Shot 2019-04-24 at 11 50 37 PM" src="https://user-images.githubusercontent.com/33525692/56708861-596ad780-66ec-11e9-9af3-9b222344c889.png">

## Search Results
<img width="1440" alt="Screen Shot 2019-04-24 at 11 51 34 PM" src="https://user-images.githubusercontent.com/33525692/56708925-9c2caf80-66ec-11e9-80a6-4976da3dc298.png">

## Episodes Modal
<img width="1431" alt="Screen Shot 2019-04-24 at 11 51 09 PM" src="https://user-images.githubusercontent.com/33525692/56708958-ae0e5280-66ec-11e9-8236-098c6631e31c.png">

##Bookmarks Page
<img width="1440" alt="Screen Shot 2019-04-24 at 11 52 49 PM" src="https://user-images.githubusercontent.com/33525692/56708966-ba92ab00-66ec-11e9-953a-7d2dd405b7ba.png">

![IMG_4138](https://user-images.githubusercontent.com/33525692/56442588-596b7180-62bf-11e9-9d2a-d5d75ef534f4.jpeg)
![IMG_4139](https://user-images.githubusercontent.com/33525692/56442603-60927f80-62bf-11e9-8c2d-220833fc6437.jpeg)
