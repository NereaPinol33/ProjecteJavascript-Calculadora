<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import Api1Data from '@/components/views/Api1View/Api1Data.vue';
</script>

<template>
  <MainLayout>
    <!-- Header Section -->
    <div class="w-full text-white px-6 py-4 bg-blue-600 rounded shadow-lg mb-6">
      <h1 class="text-2xl font-semibold">Dades de l'API 1</h1>
      <p class="mt-2">
        Aquesta pàgina mostra les dades de l'API de comentaris de JSONPlaceholder.
        <a href="https://jsonplaceholder.typicode.com/comments" target="_blank" class="text-yellow-300 underline">
          https://jsonplaceholder.typicode.com/comments
        </a>
      </p>
    </div>

    <!-- Comments Grid -->
    <Api1Data />
  </MainLayout>
</template>
