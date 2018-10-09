<template>
  <div>{{team}}</div>
</template>

<script>
export default {
  computed: {
    team: function() {
      return Object.values(this.$store.state.teams)
        .find(t => t.name === decodeURIComponent(this.$route.params.name))
    }
  }
}
</script>
