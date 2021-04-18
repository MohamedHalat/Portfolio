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
        {
          name: "Home",
          route: "/",
        },
        {
          name: "About",
          route: "/about",
        },
        {
          name: "Old Site",
          link: "https://mohamedhalat.com",
        },
        {
          name: "Github",
          link: "https://github.com/MohamedHalat/Vue-Site",
          newPage: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/halat",
          newPage: true,
        },
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
