# Ani-Manage

This is my anime managing app that allows you to search through different anime titles and genres. Find an anime you like? There is a bookmarking feature added that allows you to keep track of the animes that interest you. Being a fan of anime myself, I enjoy creating anime related things. I have been on many anime websites and the ones that have a database that stores user information have been either too complicated to use or an overkill on features that make it tedious to use. Ani-Mange is an attempt to create an easy to use managing system that allows you to search what you need instantly and have easy access to anime episodes without leaving the page or losing your search results.


## React

Ani-Mange is a React based app that is deployed on Heroku. This application takes advantage of some external libraries such as:

##### semantic-ui
##### semantic-ui-React
##### axios
##### react-router-dom

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


![IMG_4138](https://user-images.githubusercontent.com/33525692/56442588-596b7180-62bf-11e9-9d2a-d5d75ef534f4.jpeg)
![IMG_4139](https://user-images.githubusercontent.com/33525692/56442603-60927f80-62bf-11e9-8c2d-220833fc6437.jpeg)
