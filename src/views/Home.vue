<template>
  <div class="bg-gray-100 h-screen dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="w-full flex items-center justify-end py-8">
        <dark-mode-button/>
      </div>
      <main class="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
            <p>
              <span class="block xl:inline">Welcome!</span>
            </p>
            <p>
              <span class="block text-indigo-600 xl:inline">I'm Mohamed Halat</span>
            </p>
          </h1>
          <p class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-gray-300">
            Junior Full Stack Developer at Verto and student at the University of Toronto.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="https://github.com/MohamedHalat" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                GitHub
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="https://www.linkedin.com/in/halat/" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Linked in
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import DarkModeButton from "@/components/dark-mode-button";

export default {
  components: {
    'dark-mode-button': DarkModeButton,
  }
};
</script>
