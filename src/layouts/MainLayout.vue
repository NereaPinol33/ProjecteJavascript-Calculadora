<script setup>
import Navbar from '@/components/layouts/MainLayout/Navbar.vue';
import Footer from '@/components/layouts/MainLayout/Footer.vue';
</script>

<template>
  <main class="w-full min-h-screen bg-gray-800">
    <Navbar />
    <div class="max-w-5xl mx-auto px-4 py-4 md:py-16">
      <slot />
    </div>
    <Footer />
  </main>
</template>
