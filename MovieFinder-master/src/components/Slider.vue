<template>
    <div id="slider" v-show="!search.emptyResults">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval=0
        controls
        indicators
        background="#ababab"
        img-width="100%"
        img-height="100%"
        style="text-shadow: 1px 1px 2px #333;  display: block; margin-left: auto; margin-right: auto; width: 1024px"
        :img-blank="true"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="(movies, index) in moviesListSlider" v-bind:key="index"
            :caption="movies.title"
            :text-html="movieSubtitle(movies)"
          >
          <template v-slot:img>
            <img
              class="d-block"
              width="1024"
              height="480"
              :src="movies.poster"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Slider',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    // Method for set the HTML inside the slider
    movieSubtitle (movie) {
      return movie.director + '<p>' + movie.year + '</p>'
    }
  },
  computed: {
    ...mapState(['search', 'sliderMovies']),

    /**
     * Prepend the movie searched with 2 stored results, omdbapi only returns 1 result,
     * add 2 stored movies to show slider functionality
     */
    moviesListSlider () {
      return [...[this.search.results], ...this.sliderMovies]
    }
  }
}
</script>
