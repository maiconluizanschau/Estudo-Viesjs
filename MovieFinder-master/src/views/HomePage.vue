<template>
  <div id="HomePage">
    <b-jumbotron>
      <template v-slot:header>
        <b-row class="justify-content-center">MovieFinder</b-row>
      </template>

      <b-container>
        <hr class="my-4" />
        <b-row class="justify-content-center"
        >Searchsite for searching movies and series, displaying the title, year, poster and director!</b-row>

        <b-row class="justify-content-center mt-3">
          <HomeSearch />
        </b-row>
      </b-container>
    </b-jumbotron>
    <Recommendations />
  </div>
</template>

<script>
import HomeSearch from '@/components/HomeSearch.vue'
import Recommendations from '@/components/Recommendations.vue'
export default {
  name: 'HomePage',
  components: {
    HomeSearch,
    Recommendations
  }
}
</script>
