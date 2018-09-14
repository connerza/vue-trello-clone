<template>
  <v-app>
    <Drawer />
    <v-toolbar app />
    <v-content>
      <router-view />
    </v-content>
    <v-footer 
      fixed 
      app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";

export default {
  name: 'App',
  components: {
    Drawer
  }
}
</script>
