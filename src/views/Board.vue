<template>
  <v-container fluid>
    <h2 class="display-2">{{ board ? board.name : '' }}</h2>
    <div 
      fill-height
      class="list-container">
      <v-layout row>
        <h2 
          v-for="l in boardLists(board)"
          :key="l.id">{{ l.name }}</h2>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Board',
  computed: {
    board: function () {
      return this.$store.state.boards[this.$route.params.id]
    },
    lists: function() {
      return this.$store.state.lists
    },
    tasks: function() {
      return this.$store.state.tasks
    }
  },
  methods: {
    boardLists: function(board) {
      return board.lists.map(l => this.lists[l])
    },
    listTasks: function(list) {
      return list.tasks.map(t => this.tasks[t])
    }
  }
}
</script>

<style scoped>
  .list-container {
    overflow-x: scroll;
  }
</style>
