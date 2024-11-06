<script setup>
import { ref } from 'vue';
import Vue3Logo from '@/assets/images/logo.png';

const isMenuOpen = ref(false); // Tracks the mobile menu open/close state

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="w-full bg-gray-900 p-4 flex justify-between items-center">
    <!-- Logo and Title -->
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img :src="Vue3Logo" alt="Vue 3 Logo" class="w-8 h-8" />
        <h1 class="text-white text-lg font-bold">Vue3APP</h1>
      </div>
    </router-link>

    <!-- Mobile Menu Toggle Button -->
    <button @click="toggleMenu" class="text-white md:hidden focus:outline-none">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Navbar Links (visible on larger screens and when menu is open) -->
    <div :class="{ 'hidden': !isMenuOpen, 'flex': isMenuOpen, 'md:flex': true }"
      class="flex-col md:flex-row md:items-center gap-4 text-white absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent">
      <router-link class="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg"
        :class="{ 'bg-gray-700': $route.name === 'calculator' }" :to="{ name: 'calculator' }"
        @click="isMenuOpen = false">
        Calculadora
      </router-link>
      <router-link class="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg"
        :class="{ 'bg-gray-700': $route.name === 'api1' }" :to="{ name: 'api1' }" @click="isMenuOpen = false">
        Dades API 1
      </router-link>
      <router-link class="cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg"
        :class="{ 'bg-gray-700': $route.name === 'api2' }" :to="{ name: 'api2' }" @click="isMenuOpen = false">
        Dades API 2
      </router-link>
    </div>
  </div>
</template>
