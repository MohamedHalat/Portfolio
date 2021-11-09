<template>
  <router-view />
</template>
<script>

export default {
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
