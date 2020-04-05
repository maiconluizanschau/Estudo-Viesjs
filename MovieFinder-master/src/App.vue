<template>
  <div id="MovieFinder">
    <Header />
    <ConnexionError v-if="connexionError" :message="connexionErrorMessage"/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ConnexionError from '@/components/ConnexionError.vue'
import { mapState } from 'vuex'

export default {
  name: 'MovieFinder',
  components: {
    Header,
    ConnexionError
  },
  computed: {
    ...mapState(['connexionError', 'connexionErrorMessage'])
  }
}
</script>
