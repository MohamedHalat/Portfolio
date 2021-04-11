<template>
  <header class="app-header">
    <nav-bar :routes="routes">
    </nav-bar>
    <footer
      class="nav-footer"
      style="
        height: 2px;
        width: 100%;
        background-color: #fcb934;
        position: fixed;
      "
    ></footer>
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
</style>