<template>
  <v-app>
    <Drawer />
    <v-toolbar app />
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer 
      fixed 
      app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Drawer from "./components/Drawer";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Drawer
  }
}
</script>
