<template>
  <header class="t-0 w-screen bg-white">
    <nav-bar :routes="routes"> </nav-bar>
    <footer class="h-1 w-screen bg-indigo-600"></footer>
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