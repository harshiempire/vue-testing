<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  show: boolean;
  students: { id: string; name: string; rollNo: string; }[];
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'upload', results: any): void;
}>();

const selectedExam = ref('FA1');
const results = ref<Record<string, number>>({});

const exams = ['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2'];

const handleUpload = () => {
  emit('upload', {
    exam: selectedExam.value,
    results: results.value
  });
  results.value = {};
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Upload Results</h2>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Select Exam
          </label>
          <select
            v-model="selectedExam"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          >
            <option v-for="exam in exams" :key="exam" :value="exam">
              {{ exam }}
            </option>
          </select>
        </div>

        <div class="bg-gray-50 rounded-xl p-4">
          <div class="space-y-4">
            <div v-for="student in students" :key="student.id">
              <div class="flex items-center gap-4">
                <div class="flex-1">
                  <div class="font-medium">{{ student.name }}</div>
                  <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                </div>
                <input
                  v-model.number="results[student.id]"
                  type="number"
                  min="0"
                  max="100"
                  class="w-24 px-3 py-1 border border-[#ECECEC] rounded-lg text-center"
                  placeholder="Marks"
                />
              </div>
            </div>
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
            @click="handleUpload"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Upload Results
          </button>
        </div>
      </div>
    </div>
  </div>
</template>