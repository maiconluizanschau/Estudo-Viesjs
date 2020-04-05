<template>
  <b-container>
    <b-row>
        <b-col class="text-center"><h2>Recommendations</h2></b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col md="4" v-for="(movies, index) in recommendations.movies" v-bind:key="index">
        <h2>{{movies.title}}</h2>
        <p>{{movies.description}}</p>
        <p>{{movies.year}}</p>
        <p>{{movies.director}}</p>
        <p>
          <b-button type="submit" variant="secondary" @click="recommendationsRequest(movies.title)">View details</b-button>
        </p>
      </b-col>
    </b-row>
    <hr />
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Recommendations',
  computed: {
    ...mapState(['recommendations'])
  },
  methods: {
    ...mapActions([
      'movieTitleRequest' // perform request to movie API
    ]),
    /**
     * Performs an API request with the title movie, push redirect to results page
     */
    async recommendationsRequest (movieTitle) {
      await this.movieTitleRequest(movieTitle)
      this.$router.push('/movies')
    }
  }
}
</script>
