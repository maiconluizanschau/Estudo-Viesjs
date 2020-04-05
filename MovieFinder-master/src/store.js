import Vue from 'vue'
import Vuex from 'vuex'
import movieService from '@/services/MovieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieQuery: '',
    connexionError: false,
    connexionErrorMessage: 'Something went wrong! please try again',
    search: {
      emptyResults: true,
      results: {
        title: '',
        poster: '',
        director: '',
        year: ''
      }
    },
    sliderMovies: [
      {
        director: 'Steven Spielberg',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        title: 'Schindler\'s List',
        year: '1993'
      },
      {
        director: 'Peter Jackson',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001'
      }
    ],
    recommendations: {
      header: 'Top 3 Rated Movies IMDb',
      movies: [
        {
          title: 'The Shawshank Redemption',
          description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          year: '1995',
          director: 'Frank Darabont'
        },
        {
          title: 'The Godfather',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          year: '1972',
          director: 'Francis Ford Coppola'
        },
        {
          title: 'The Dark Knight',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
          year: '2008',
          director: 'Christopher Nolan'
        }
      ]
    }
  },
  mutations: {
    SET_MOVIE_RESULTS (state, responseData) {
      state.search.results.title = responseData.Title
      state.search.results.poster = responseData.Poster
      state.search.results.director = responseData.Director
      state.search.results.year = responseData.Year
      state.search.emptyResults = false
      state.connexionError = false
    },
    SET_MOVIE_QUERY (state, movieQuery) {
      state.movieQuery = movieQuery
    },
    SET_NO_RESULTS (state) {
      state.search.emptyResults = true
    },
    CONNEXION_ERROR (state) {
      state.connexionError = true
    }
  },
  actions: {
    /**
     * Performs a request to API service and either set the results, or display a connexion error
     * @param {Object} state  Vuex state
     * @param {String} movieInput User question
     */
    async movieTitleRequest (state, movieInput) {
      try {
        const response = await movieService.getUser({
          movieTitle: movieInput
        })
        if (response.data.Response === 'True') {
          state.commit('SET_MOVIE_QUERY', movieInput)
          state.commit('SET_MOVIE_RESULTS', response.data)
        } else state.commit('SET_NO_RESULTS')
      } catch (e) {
        state.commit('CONNEXION_ERROR')
      }
    }
  }
})
