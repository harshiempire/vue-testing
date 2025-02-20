<script setup lang="ts">
import { ref } from 'vue';
import type { QuestionPaper } from '@/types/qb';

const props = defineProps<{
  paper: QuestionPaper;
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'publish', data: { dueDate: string; dueTime: string }): void;
}>();

const dueDate = ref('');
const dueTime = ref('');

const handlePublish = () => {
  if (dueDate.value && dueTime.value) {
    emit('publish', {
      dueDate: dueDate.value,
      dueTime: dueTime.value
    });
  }
};

// Set minimum date to today
const minDate = new Date().toISOString().split('T')[0];
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Publish Question Paper</h2>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <h3 class="font-medium mb-4">Publishing to Class {{ paper.class }}</h3>
          <div class="text-sm text-gray-600 mb-6">
            <div>Title: {{ paper.title }}</div>
            <div>Total Marks: {{ paper.totalMarks }}</div>
            <div>Duration: {{ paper.duration }} minutes</div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              v-model="dueDate"
              type="date"
              :min="minDate"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Due Time
            </label>
            <input
              v-model="dueTime"
              type="time"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              required
            />
          </div>
        </div>

        <div class="flex justify-end gap-4">
          <button
            @click="emit('close')"
            class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
          >
            Cancel
          </button>
          <button
            @click="handlePublish"
            class="px-4 py-2 bg-green-600 text-white rounded-xl"
            :disabled="!dueDate || !dueTime"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>