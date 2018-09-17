<template>
  <div class="home">
    <v-container 
      fluid
      grid-list-lg>
      <h2 class="display-2">
        Your Teams
      </h2>
      <br>
      <BoardList 
        v-for="team in teams"
        :key="team.id"
        :team-id="team.id" />
      <br>
      <v-btn>New Team <v-icon right>add</v-icon></v-btn>
    </v-container>
  </div>
</template>

<script>
import BoardList from "@/components/BoardList";
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    BoardList,
  },
  computed: {
    ...mapGetters({
      teams: 'allTeams'
    }),
  },
  mounted: function () {
    this.$store.dispatch('getAllTeams').then(() => {
      this.$store.dispatch('getAllBoards');
    });
  }
}
</script>
