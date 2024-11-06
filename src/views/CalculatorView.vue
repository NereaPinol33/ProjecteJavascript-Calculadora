<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import Calculator from '@/components/views/CalculatorView/Calculator.vue';

</script>

<template>
  <MainLayout>
    <!-- Header Section -->
    <div class="w-full text-white px-6 py-4 bg-blue-600 rounded shadow-lg mb-6">
      <h1 class="text-2xl font-semibold">Calculadora</h1>
      <p class="mt-2">
        Calculadora senzilla feta amb Vue 3 per Nerea Piñol Monterde. Destaco que l'ús de l'eval() pot ser perillós.
      </p>
    </div>
    <Calculator />
  </MainLayout>
</template>
