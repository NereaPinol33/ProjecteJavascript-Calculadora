<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MainLayout from '@/layouts/MainLayout.vue';
import Api2Data from '@/components/views/Api2View/Api2Data.vue';
import Spinner from '@/components/Spinner.vue';

const users = ref([]); // Array to store the user data

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    users.value = response.data.users; // Accessing the users array in the response
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<template>
  <MainLayout>
    <!-- Header Section -->
    <div class="w-full text-white px-6 py-4 bg-blue-600 rounded shadow-lg mb-6">
      <h1 class="text-2xl font-semibold">Dades de l'API 2</h1>
      <p class="mt-2">
        Aquesta pàgina mostra les dades de l'API d'usuaris de DummyJSON.
        <a href="https://dummyjson.com/users" target="_blank" class="text-yellow-300 underline">
          https://dummyjson.com/users
        </a>
      </p>
    </div>

    <!-- Users Grid -->
    <Api2Data />
  </MainLayout>
</template>
