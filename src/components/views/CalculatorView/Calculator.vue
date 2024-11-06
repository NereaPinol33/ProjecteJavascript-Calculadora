<script setup>
import { ref } from 'vue';

const input = ref(''); // Stores the current input for display and calculation

function appendValue(value) {
  input.value += value; // Append the pressed button's value to the input
}

function calculate() {
  try {
    input.value = eval(input.value); // Calculate the result using eval
  } catch (e) {
    input.value = 'Error'; // Handle any invalid expressions
  }
}

function clearInput() {
  input.value = ''; // Clear the input
}

function deleteLast() {
  input.value = input.value.slice(0, -1); // Remove the last character
}
</script>

<template>
  <div class="bg-gray-900 p-6 rounded shadow-lg">
    <!-- Display -->
    <div class="h-16 p-4 text-white bg-gray-700 rounded text-right text-2xl mb-4">{{ input ? input : 0 }}</div>

    <!-- Buttons Grid -->
    <div class="grid grid-cols-4 gap-4 text-white">
      <button @click="clearInput" class="col-span-2 p-4 bg-red-500 rounded">C</button>
      <button @click="deleteLast" class="p-4 bg-yellow-500 rounded">DEL</button>
      <button @click="appendValue('/')" class="p-4 bg-blue-600 rounded">/</button>

      <button @click="appendValue('7')" class="p-4 bg-gray-600 rounded">7</button>
      <button @click="appendValue('8')" class="p-4 bg-gray-600 rounded">8</button>
      <button @click="appendValue('9')" class="p-4 bg-gray-600 rounded">9</button>
      <button @click="appendValue('*')" class="p-4 bg-blue-600 rounded">×</button>

      <button @click="appendValue('4')" class="p-4 bg-gray-600 rounded">4</button>
      <button @click="appendValue('5')" class="p-4 bg-gray-600 rounded">5</button>
      <button @click="appendValue('6')" class="p-4 bg-gray-600 rounded">6</button>
      <button @click="appendValue('-')" class="p-4 bg-blue-600 rounded">−</button>

      <button @click="appendValue('1')" class="p-4 bg-gray-600 rounded">1</button>
      <button @click="appendValue('2')" class="p-4 bg-gray-600 rounded">2</button>
      <button @click="appendValue('3')" class="p-4 bg-gray-600 rounded">3</button>
      <button @click="appendValue('+')" class="p-4 bg-blue-600 rounded">+</button>

      <button @click="appendValue('0')" class="col-span-2 p-4 bg-gray-600 rounded">0</button>
      <button @click="appendValue('.')" class="p-4 bg-gray-600 rounded">.</button>
      <button @click="calculate" class="p-4 bg-green-500 rounded">=</button>
    </div>
  </div>
</template>
