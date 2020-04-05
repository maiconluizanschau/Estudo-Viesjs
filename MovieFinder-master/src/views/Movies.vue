<template>
  <div id="movieContainer" class="mt-5">
    <b-container>
      <b-row>
        <b-col class="text-center"><h2>Movies</h2></b-col>
      </b-row>
      <b-row class="row justify-content-center">
        <b-col class="text-center">
          <slider></slider>
          <b-alert
            class="mt-5 center-block"
            v-show="search.emptyResults"
            show
            variant="warning"
          >No movies found with this title, please try again using other words!</b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Movies',
  components: {
    Slider
  },
  computed: {
    ...mapState(['movieQuery', 'search'])
  },
  mounted () {
    // If the user did not perform  any search
    if (!this.movieQuery) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped>
.alert {
  width: 50%;
  display: inline-block;
  margin: 0 auto;
}
</style>
