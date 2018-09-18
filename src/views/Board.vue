<template>
  <v-container 
    fluid
    grid-list-xl>
    <v-layout row>
      <v-flex xs12>
        <h2 class="display-2">{{ board ? board.name : '' }}</h2>
      </v-flex>
    </v-layout>
    <v-layout 
      class="scroll-x" 
      row>
      <List 
        v-for="l in boardLists(board)"
        :list="l"
        :tasks="listTasks(l)"
        :key="l.id" />
    </v-layout>
  </v-container>
</template>

<script>
import List from "../components/List.vue";
export default {
  name: 'Board',
  components: {
    List
  },
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
  .scroll-x {
    overflow-x: scroll;
    display: flex;
  }

  .scroll-x > * {
    flex-shrink: 0;
  }
</style>
