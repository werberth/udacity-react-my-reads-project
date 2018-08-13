## Udacity Nanodegree - MyReads Project

<img src="https://media.giphy.com/media/1AfrpjvfJXp7bdIaVT/giphy.gif">

### Instalation
* Clone this repo.
* install all project dependencies with `yarn install`.
* start the development server with `yarn start`.

###  Project Structure
```bash
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── README.md
├── yarn.lock
├── public
│   ├── favicon.png # Favicon image
│   └── index.html
└──src
    ├── App.css # App stylesheet
    ├── App.test.js # App test (without changes)
    ├── App.js # App root
    ├── components
    │   ├── BookItem.js # Component responsible for render each Book
    │   ├── BookShelf.js # Component responsible for organize the shelves
    │   ├── ListBooks.js # Component resposible for list all shelves
    │   └── SearchBooks.js # Component responsible for processing the search
    ├── icons # All app icons
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   ├── loader.gif # loading GIF
    │   ├── logo.png # LOGO image
    │   ├── search_change.svg # search button icon when mouse hover
    │   ├── search.svg # search button icon
    │   └── thumbnail.png # default book cover
    ├── index.css # Global styles.(without changes)
    └── index.js # Global js script. (without changes)
    └── utils
        └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
