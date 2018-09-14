<template>
  <div class="home">
    <v-container 
      fluid
      grid-list-lg>
      <h2 class="display-2">
        Your Teams
      </h2>
      <br>
      <BoardList :team-id="1" />
      <br>
      <v-btn>New Team <v-icon right>add</v-icon></v-btn>
    </v-container>
  </div>
</template>

<script>
import BoardList from "@/components/BoardList";
export default {
  name: 'Home',
  components: {
    BoardList
  }
}
</script>
