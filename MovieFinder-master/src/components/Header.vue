<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>MovieFinder</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Movie title"
            @keydown.enter.native="onHeaderEnterKey"
            v-model="movieHeader.searchInput"
          ></b-form-input>
        </b-nav-form>
        <b-button
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          @click="submitSearch(movieHeader.searchInput)"
        >Search</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['search'])
  },
  data () {
    return {
      movieHeader: {
        searchInput: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'movieTitleRequest' // perform request to movie API
    ]),
    onHeaderEnterKey (event) {
      this.submitSearch(this.movieHeader.searchInput)
    },
    /**
     * Perform serach API request and push redirect to movies
     */
    async submitSearch () {
      if (this.movieHeader.searchInput !== '') {
        await this.movieTitleRequest(this.movieHeader.searchInput)
        if (!this.connexionError && this.$router.currentRoute.name !== 'movies') this.$router.push('/movies')
      }
    }
  }
}
</script>
