<template>
  <v-flex 
    sm12 
    md4 
    lg3>
    <v-card>
      <v-list 
        three-line
        subheader>
        <v-subheader>{{ list.name }}</v-subheader>
        <v-list-tile
          v-for="t in tasks"
          :key="t.id"
          avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ t.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ t.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Object,
      default: function () {
        return {}
      }
    },
    tasks: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
