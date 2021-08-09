<template>
  <Disclosure as="nav" class="antialiased text-gray-900 flex flex-col " v-slot="{ open }">
    <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="lg:block h-10 w-auto" src="@/assets/images/logo.svg" alt="MH" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in routes" :key="item.href"
                :to="item.href"
                custom
                v-slot="{ href, route, navigate, isActive }"
              >
                <a :href="href" @click="navigate" :class="[isActive ? 'bg-indigo-600 text-white' : 'text-indigo-600 hover:bg-indigo-900 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="isActive ? 'page' : undefined">
                  {{ route.name }}
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in routes" :key="item.href"
          :to="item.href"
          custom
          v-slot="{ href, route, navigate, isActive }"
        >
          <a :href="href" @click="navigate" :class="[isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="isActive ? 'page' : undefined">
            {{ route.name }}
          </a>
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>

</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  props: {
    routes: {
      type: Array,
      required: true,
      validate: (value) =>
        value.every((page) => page.href && page.name),
    },
  },
  setup() {
    const open = ref(false)
    return {
      open,
    }
  },
}
</script>