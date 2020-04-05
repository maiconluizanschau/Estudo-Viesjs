# MovieFinder
Movies and series search website build with Vuejs. 

It uses The Open Movie Database's API (https://www.omdbapi.com/) to fetch the information. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
By default the App will be runnit at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.12:8080/


### Compiles and minifies for production
```
npm run build
```

### Previewing Locally

The dist directory is meant to be served by an HTTP server (unless you've configured publicPath to be a relative value)

First we must compile and minify:
```
npm run build
```
To preview locally the app, The easiest way to preview your production build locally is using a Node.js static file server,for example [serve](https://github.com/zeit/serve):

```
npm install -g serve
```

```
serve -s dist
```

## Application logic and structure

### State managent
The application uses Vuex store, a state management pattern + library for Vue.js applications, in ```src/store.js``` can be found all the logic of the application,
the data stored, which is read by the components, mutation of this data, and handles the error and Api requests.

### Routing
```src/router.js```  handles all the routing of the application, being able to link the views and components to the different routes.

### Api requests
The application uses axios to perform the API requests, the different routes can be found in ```src/Services/MovieService.js``` and ```src/store.js``` handles the logic 
of when to call and mutate the data with the responses.

### Views and components
2 main views, HomePage, with a search input and a recommendations section, and results page, only shown after the user has performed a search.


### Nice to have/improvements
* omdbapi API only returns 1 result for search, which is limited when showing the slider functionallity, that's why  3 movies are always shown in the results page, 2 of which arelocated in the store.js.
* omdbapi API Poster attribute, which is used for showing images in the slider, does not have an standard image size, because of that some movie images are not displayed in the same width/height ratio. 
* Performing the requests client-side, exposes the API key used for ombdapi API, which then can be used by external users. To avoid that, the request could be performed by a server-side service.
  
## Contact
For any problems or questions, please contact:
bmayolas@gmail.com



