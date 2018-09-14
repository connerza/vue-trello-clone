<template>
  <v-navigation-drawer
    persistent
    :mini-variant.sync="menuMini"
    v-model="drawer"
    enable-resize-watcher
    fixed
    app
  >
    <v-toolbar 
      flat 
      class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img 
              class="logo" 
              src="../assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn 
              icon 
              @click.stop="menuMini = !menuMini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list 
      class="pt-0" 
      dense>
      <v-divider />
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"/>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    data () {
      return {
        items: [
          {
            icon: 'home',
            link: '/home'
          },
        ],
        menuMini: true,
        title: 'Vuello'
      }
    }
  }
</script>

<style scoped>
  .logo {
    max-height: 60%;
    width: auto;
  }
</style>