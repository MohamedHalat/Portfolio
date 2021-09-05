<template>
  <app-header :routes="routes"> </app-header>
  <router-view />
</template>
<script>
import AppHeader from "@/components/app-header/app-header.vue";

export default {
  components: {
    "app-header": AppHeader,
  },
  props: {
    routes: {
      type: Array,
      required: false,
      default: () => [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about'},
      ],
    },
  },
};
</script>
<style scoped>

html, body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

#app {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
</style>
