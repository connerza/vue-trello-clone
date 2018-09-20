<template>
  <v-flex 
    sm12 
    md4 
    lg3>
    <v-card 
      class="pa-1">
      <v-card-title>
        <div class="display-1">{{ list.name }}</div>
      </v-card-title>
      <v-card 
        hover
        v-for="t in tasks"
        :key="t.id"
        class="ma-2"
        @click.native="$emit('task-click', t.id)">
        <v-card-title 
          primary-title
          style="display: block">
          <div class="title mb-2">{{ t.name }}</div>
          <div>{{ t.description }}</div>
        </v-card-title>
      </v-card>
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
