<template>
  <div class="flex align-center justify-right">
    <div
      class="relative w-12 h-6 transition duration-200 ease-linear rounded-full"
      :class="[toggleActive ? 'bg-green-400' : 'bg-gray-400']"
    >

      <label
        for="toggle"
        class="absolute left-0 w-6 h-6 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer"
        :class="[
          toggleActive
            ? 'translate-x-full border-green-400'
            : 'translate-x-0 border-gray-400',
        ]"
      >
      </label>
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        class="w-full h-full appearance-none focus:outline-none"
        @click="handleToggleActive"
      />
    </div>
    <i class="fa fa-moon mx-4 my-1 fas-large" :style="toggleActive ? 'filter: invert(1)' : ''"></i>
  </div>
</template>
<script>
export default {
  name: "DarkModeButton",
  data() {
    return {
      toggleActive: false,
    };
  },
  methods: {
    handleToggleActive() {
      this.toggleActive = !this.toggleActive;
      const html = document.querySelector("html");
      if (this.toggleActive) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    },
  },
};
</script>
