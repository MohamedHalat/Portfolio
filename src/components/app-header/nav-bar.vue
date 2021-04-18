<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logo.svg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Mohamed Halat
    </a>
    <button
      class="navbar-toggler"
      type="button"
      @click="collapsed = !collapsed"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" :class=" collapsed ? 'collapse' : '' " id="navbarNav">
      <ul class="nav navbar-nav">
        <li v-for="(page, index) in routes" :key="page.name" class="nav-item">
          <a
            class="nav-link"
            v-if="page.link"
            :href="page.link"
            :target="page.newPage ? '_blank' : ''"
            :class="index == 0 ? 'active' : ''"
          >
            {{ page.name }}
          </a>
          <router-link
            v-else
            :to="page.route"
            class="nav-link"
            :class="index == 0 ? 'active' : ''"
          >
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </div>
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
  data() {
    return {
      collapsed: true,
    }
  },
  methods: {
  }
};
</script>
<style scoped>
</style>