<template>
        <div>
          <Navbar />
          <router-view />
        </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default { 
    components: {
      Navbar
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
