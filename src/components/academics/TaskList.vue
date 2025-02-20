<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore } from '@/stores/task';
import type { Task } from '@/types';

const props = defineProps<{
  className: string;
}>();

const taskStore = useTaskStore();
const tasks = computed(() => taskStore.getTasksByClass(props.className));

const getTaskTypeLabel = (type: Task['type']) => {
  const labels = {
    activity: 'Activity Based Learning',
    project: 'Project Based Learning',
    mcq: 'MCQ Test'
  };
  return labels[type];
};
</script>

<template>
  <div class="space-y-6">
    <div v-for="task in tasks" :key="task.id" 
      class="bg-white rounded-3xl border border-[#ECECEC] p-6">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ task.title }}</h3>
          <span class="inline-block px-3 py-1 bg-blue-50 text-[#0447A8] rounded-lg text-sm">
            {{ getTaskTypeLabel(task.type) }}
          </span>
        </div>
        <div class="text-right">
          <div class="text-sm text-gray-500">Due Date</div>
          <div class="font-medium">{{ new Date(task.dueDate).toLocaleDateString() }}</div>
        </div>
      </div>
      
      <p class="text-gray-600 mb-4">{{ task.description }}</p>
      
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-500">
          Max Marks: {{ task.maxMarks }}
        </div>
        <button class="px-4 py-2 bg-[#0447A8] text-white rounded-xl">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>