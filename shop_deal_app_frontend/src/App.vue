<template>
        <div>
          <Navbar @burger-clicked="visibleLeft = true" />
          <!-- eslint-disable-next-line -->
          <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
            <ul>
              <li></li>
            </ul>
          </Sidebar>

          <router-view />
        </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

import { ref } from 'vue';

export default { 
    components: {
      Navbar
    },
    setup() {
      const visibleLeft = ref(false);
      return { visibleLeft };
    }
}
</script>

<style>
html, body {
  margin: 0px !important;
  padding: 0px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
