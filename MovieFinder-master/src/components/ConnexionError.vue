<template>
  <b-alert show variant="danger" class="mb-0">{{message}}</b-alert>
</template>

<script>

export default {
  name: 'ConnexionError',
  props: ['message']
}
</script>
