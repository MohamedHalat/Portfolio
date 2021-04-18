<template>
  <header class="app-header">
    <nav-bar :routes="routes"> </nav-bar>
    <footer class="nav-footer"></footer>
  </header>
</template>
<script>
import NavBar from "./nav-bar";

export default {
  components: {
    "nav-bar": NavBar,
  },
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
header.app-header {
  top: 0;
  width: 100%;
  background-color: white;
}
.nav-footer {
  height: 2px;
  width: 100%;
  background-color: #fcb934;
}
</style>