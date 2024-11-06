<script setup>
import { ref, onMounted } from 'vue';
import Spinner from '@/components/Spinner.vue';

const comments = ref([]);
const loading = ref(true);

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  comments.value = await response.json();
  loading.value = false;
});
</script>


<template>
  <template v-if="loading">
    <Spinner />
  </template>
  <template v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="comment in comments" :key="comment.id"
        class="bg-gray-900 p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1 ">
        <h2 class="text-lg font-bold text-white mb-2">{{ comment.name }}</h2>
        <p class="text-sm text-gray-400 mb-4">{{ comment.email }}</p>
        <p class="text-sm text-gray-300">{{ comment.body }}</p>
      </div>
    </div>
  </template>
</template>
