<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Spinner from '@/components/Spinner.vue';

const users = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    users.value = response.data.users;
    loading.value = false;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<template>
  <template v-if="loading">
    <Spinner />
  </template>
  <template v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="user in users" :key="user.id"
        class="bg-gray-900 p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1">
        <img :src="user.image" alt="User Avatar" class="w-24 h-24 rounded-full mx-auto mb-4">
        <h2 class="text-lg font-bold text-white mb-2">{{ user.firstName }} {{ user.lastName }}</h2>
        <p class="text-sm text-gray-400 mb-2">{{ user.email }}</p>
        <p class="text-sm text-gray-300">{{ user.address.city }}, {{ user.address.state }}</p>
      </div>
    </div>
  </template>
</template>
