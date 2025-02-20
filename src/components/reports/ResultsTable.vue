```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useSubjectStore } from '@/stores/subject';

const props = defineProps<{
  students: { id: string; name: string; rollNo: string; }[];
  selectedStudent: string | null;
  subject: string;
}>();

const subjectStore = useSubjectStore();

const tabs = ['Activities', 'MCQ Tests', 'Exams'];
const activeTab = ref(tabs[0]);

const getStudentScore = (studentId: string, exam: string) => {
  const student = subjectStore.students.find(s => s.id === studentId);
  return student?.scores[exam as keyof typeof student.scores] || '-';
};

const getAssessmentScore = (studentId: string) => {
  return {
    self: 4,
    peer: 4.5,
    teacher: 4
  };
};

const getMCQScore = (studentId: string) => {
  return {
    score: 85,
    total: 100,
    accuracy: '85%',
    timeSpent: '45 min'
  };
};

const getLevel = (score: number) => {
  if (score >= 90) return { label: 'Advanced', color: 'green' };
  if (score >= 75) return { label: 'Proficient', color: 'blue' };
  return { label: 'Beginner', color: 'yellow' };
};
</script>

<template>
  <div class="space-y-6">
    <!-- Tab Navigation -->
    <div class="flex gap-4">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="px-4 py-2 rounded-xl"
        :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Activities Table -->
    <div v-if="activeTab === 'Activities'" class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Self Assessment</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Peer Assessment</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Teacher Assessment</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Average</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Level</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr 
            v-for="student in students" 
            :key="student.id"
            v-show="!selectedStudent || selectedStudent === student.id"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <div class="font-medium">{{ student.name }}</div>
              <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-center">
                ⭐️ {{ getAssessmentScore(student.id).self }}
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-center">
                ⭐️ {{ getAssessmentScore(student.id).peer }}
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-center">
                ⭐️ {{ getAssessmentScore(student.id).teacher }}
              </div>
            </td>
            <td class="px-4 py-3 text-center">
              {{ ((getAssessmentScore(student.id).self + 
                   getAssessmentScore(student.id).peer + 
                   getAssessmentScore(student.id).teacher) / 3).toFixed(1) }}
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-center">
                <span 
                  class="px-2 py-1 text-sm rounded-lg"
                  :class="{
                    'bg-green-50 text-green-700': getLevel(85).color === 'green',
                    'bg-blue-50 text-blue-700': getLevel(85).color === 'blue',
                    'bg-yellow-50 text-yellow-700': getLevel(85).color === 'yellow'
                  }"
                >
                  {{ getLevel(85).label }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MCQ Tests Table -->
    <div v-else-if="activeTab === 'MCQ Tests'" class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Score</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Accuracy</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Time Spent</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Level</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr 
            v-for="student in students" 
            :key="student.id"
            v-show="!selectedStudent || selectedStudent === student.id"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <div class="font-medium">{{ student.name }}</div>
              <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
            </td>
            <td class="px-4 py-3 text-center">
              {{ getMCQScore(student.id).score }}/{{ getMCQScore(student.id).total }}
            </td>
            <td class="px-4 py-3 text-center">
              {{ getMCQScore(student.id).accuracy }}
            </td>
            <td class="px-4 py-3 text-center">
              {{ getMCQScore(student.id).timeSpent }}
            </td>
            <td class="px-4 py-3">
              <div class="flex justify-center">
                <span 
                  class="px-2 py-1 text-sm rounded-lg"
                  :class="{
                    'bg-green-50 text-green-700': getLevel(85).color === 'green',
                    'bg-blue-50 text-blue-700': getLevel(85).color === 'blue',
                    'bg-yellow-50 text-yellow-700': getLevel(85).color === 'yellow'
                  }"
                >
                  {{ getLevel(85).label }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Exams Table -->
    <div v-else class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">FA1</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">FA2</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">SA1</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">FA3</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">FA4</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">SA2</th>
            <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">SAFAL</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr 
            v-for="student in students" 
            :key="student.id"
            v-show="!selectedStudent || selectedStudent === student.id"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <div class="font-medium">{{ student.name }}</div>
              <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
            </td>
            <td 
              v-for="exam in ['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2', 'SAFAL']" 
              :key="exam"
              class="px-4 py-3 text-center"
            >
              {{ getStudentScore(student.id, exam) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
```