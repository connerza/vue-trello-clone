<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <h3 class="display-1">{{ team ? team.name : '' }}</h3>
    </v-flex>
    <v-flex 
      v-for="(board,i) in boards"
      :key="`${i}`"
      xs12 
      sm6 
      md4 
      lg3>
      <v-card hover>
        <v-card-title 
          primary-title 
          class="d-block">
          <div class="headline">Some cool board</div>
          <div>Board description</div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex
      xs12 
      sm6 
      md4 
      lg3>
      <v-card hover>
        <v-card-title primary-title>
          <div class="headline">
            Add a new board <v-icon>add</v-icon>
          </div>
        </v-card-title>
      </v-card>  
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BoardList',
  props: {
    teamId: {
      type: Number,
      default: -1
    }
  },
  computed: {
    boards: function () {
      return this.$store.getters.boardsByTeamId(this.teamId);
    },
    team: function () {
      return this.$store.state.teams[this.teamId];
    }
  },
  mounted: function () {
    this.$store.dispatch('getBoardsByTeamId', this.teamId);
  }
}
</script>
