<template>
  <v-navigation-drawer
    persistent
    :mini-variant.sync="menuMini"
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
      <router-link 
        to="/">
        <v-list-tile value="true">
          <v-list-tile-action>
            <v-icon v-html="'home'"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
      <v-list-group
        v-for="item in items"
        v-model="item.active"
        :key="item.text"
        :prepend-icon="item.icon"
        no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <router-link
          v-for="subItem in item.subitems"
          :key="subItem.text"
          :to="subItem.link"
          no-action>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Drawer',
    data () {
      return {
        menuMini: true,
        title: 'Vuello'
      }
    },
    computed: {
      ...mapGetters({
        teams: 'allTeams',
      }),
      items: function () {
        return [
          {
            icon: 'people',
            text: 'Teams',
            link: '',
            subitems: this.teams.map(team => {
              return {
                text: team.name,
                link: '/teams/' + encodeURIComponent(team.name)
              }
            })
          }
        ]
      }
    },
  }
</script>

<style scoped>
  .logo {
    max-height: 60%;
    width: auto;
  }
</style>