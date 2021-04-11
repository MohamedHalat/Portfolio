<template>
  <nav>
    <div class="headline">
      <div style="margin: auto 10 auto 50">
        <span class="header">Mohamed Halat</span>
      </div>
    </div>
    <ul>
      <li v-for="page in routes" :key="page.name">
        <a
          v-if="page.link"
          :href="page.link"
          :target="page.newPage ? '_blank' : ''"
          >{{ page.name }}</a
        >
        <router-link v-else :to="page.route">
          {{ page.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
      validate: (value) =>
        value.every((page) => (page.link || page.route) && page.name),
    },
  },
};
</script>
<style scoped>
div.headline {
  display: inline-flex;
}
nav {
  padding: 10px;
  position: sticky;
  top: 0;

  background-color: #ffffff;
  display: grid;
  grid-template-columns: 25% auto;
  gap: 30%;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

nav ul li a {
  text-decoration: none;
  color: #424242;
  transition: opacity 200ms ease-in-out;
  overflow: hidden;
}

nav ul li a::after {
  content: "";
  display: block;
  width: 0%;
  height: 3px;
  margin-top: 3px;
  border-radius: 3px;
  background-color: #fcb934;
  transition: width 0.2s ease-in-out;
}

nav ul li a.current::after {
  width: 100%;
}

nav ul li a:hover::after {
  width: 100%;
}
</style>