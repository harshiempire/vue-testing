<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  className: string;
}>();

// Mock students data
const students = [
  { id: '1', name: 'Alice Johnson', rollNo: '6A01', present: true },
  { id: '2', name: 'Bob Smith', rollNo: '6A02', present: true },
  { id: '3', name: 'Charlie Brown', rollNo: '6A03', present: false },
  { id: '4', name: 'Diana Miller', rollNo: '6A04', present: true },
  { id: '5', name: 'Edward Wilson', rollNo: '6A05', present: false }
].map(student => ({
  ...student,
  present: ref(student.present)
}));

const markAllPresent = () => {
  students.forEach(student => student.present.value = true);
};

const markAllAbsent = () => {
  students.forEach(student => student.present.value = false);
};

const saveAttendance = () => {
  // Here you would typically save the attendance to your backend
  console.log('Saving attendance:', students.map(s => ({
    id: s.id,
    present: s.present.value
  })));
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <div class="space-x-2">
        <button
          @click="markAllPresent"
          class="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-lg"
        >
          Mark All Present
        </button>
        <button
          @click="markAllAbsent"
          class="px-3 py-1 text-sm bg-red-50 text-red-700 rounded-lg"
        >
          Mark All Absent
        </button>
      </div>
      <button
        @click="saveAttendance"
        class="px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg"
      >
        Save
      </button>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div
        v-for="student in students"
        :key="student.id"
        class="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
      >
        <div>
          <div class="font-medium">{{ student.name }}</div>
          <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
        </div>
        <button
          @click="student.present.value = !student.present.value"
          class="px-3 py-1 text-sm rounded-lg"
          :class="student.present.value ? 
            'bg-green-50 text-green-700' : 
            'bg-red-50 text-red-700'"
        >
          {{ student.present.value ? 'Present' : 'Absent' }}
        </button>
      </div>
    </div>
  </div>
</template>