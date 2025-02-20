<script setup lang="ts">
import { ref } from 'vue';

const selectedClass = ref('6A');
const classes = ['6A', '6B', '7A', '7B', '8A', '8B'];
const searchQuery = ref('');

const teacher = {
  name: 'Rohan Bhattacharya',
  role: 'Mathematics Teacher',
  stage: 'Middle Stage'
};
</script>

<template>
  <header class="h-16 bg-white border-b border-[#ECECEC] fixed top-0 left-64 right-0 z-10">
    <div class="h-full px-6 flex items-center justify-between">
      <div class="flex items-center space-x-4 flex-1">
        <select 
          v-model="selectedClass"
          class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
        >
          <option v-for="class_ in classes" :key="class_" :value="class_">
            Class - {{ class_ }}
          </option>
        </select>

        <div class="flex-1 max-w-2xl">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search anything..."
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="text-right">
          <div class="font-medium">{{ teacher.name }}</div>
          <div class="text-sm text-gray-500">{{ teacher.role }} | {{ teacher.stage }}</div>
        </div>

        <button class="px-4 py-2 bg-[#0447A8] text-white rounded-xl">
          Timetable
        </button>
      </div>
    </div>
  </header>
</template>