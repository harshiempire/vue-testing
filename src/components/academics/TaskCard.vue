<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '@/types/academics';
import { useAcademicsStore } from '@/stores/academics';
import TaskDetailsModal from './TaskDetailsModal.vue';

const props = defineProps<{
  task: Task;
}>();

const showDetailsModal = ref(false);
const academicsStore = useAcademicsStore();
const evidence = academicsStore.getTaskEvidence(props.task.id);
const reviews = academicsStore.getTaskReviews(props.task.id);

const getStatusColor = (status: Task['status']) => {
  const colors = {
    draft: 'gray',
    assigned: 'blue',
    submitted: 'yellow',
    reviewed: 'green'
  };
  return colors[status];
};
</script>

<template>
  <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ task.title }}</h3>
        <div class="flex gap-2 mb-2">
          <span 
            class="px-3 py-1 text-sm rounded-lg"
            :class="`bg-${getStatusColor(task.status)}-50 text-${getStatusColor(task.status)}-700`"
          >
            {{ task.status }}
          </span>
          <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
            {{ task.type }}
          </span>
        </div>
      </div>
      <div class="text-right">
        <div class="text-sm text-gray-500">Due Date</div>
        <div class="font-medium">{{ new Date(task.dueDate).toLocaleDateString() }}</div>
      </div>
    </div>

    <p class="text-gray-600 mb-4">{{ task.description }}</p>

    <div class="flex justify-between items-center">
      <div>
        <div class="text-sm text-gray-500">Max Marks: {{ task.maxMarks }}</div>
        <div class="text-sm text-gray-500">
          {{ evidence.length }} submissions | {{ reviews.length }} reviews
        </div>
      </div>
      <button 
        @click="showDetailsModal = true"
        class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
      >
        View Details
      </button>
    </div>

    <TaskDetailsModal
      :show="showDetailsModal"
      :task="task"
      @close="showDetailsModal = false"
    />
  </div>
</template>