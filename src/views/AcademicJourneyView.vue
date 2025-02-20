<script setup lang="ts">
import { ref, computed } from 'vue';
import { useJourneyStore } from '@/stores/journey';
import TimelineView from '@/components/journey/TimelineView.vue';
import PortfolioView from '@/components/journey/PortfolioView.vue';
import AchievementsView from '@/components/journey/AchievementsView.vue';

const journeyStore = useJourneyStore();
const activeTab = ref<'timeline' | 'portfolio' | 'achievements'>('timeline');
const selectedStudent = ref<string | null>(null);
const showStudentList = ref(true);

// Mock student data with more details
const students = [
  {
    id: 'student1',
    name: 'Alice Johnson',
    class: '6A',
    rollNo: '6A01',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  },
  {
    id: 'student2',
    name: 'Bob Smith',
    class: '6A',
    rollNo: '6A02',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
  },
  {
    id: 'student3',
    name: 'Charlie Brown',
    class: '6A',
    rollNo: '6A03',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
  },
  {
    id: 'student4',
    name: 'Diana Miller',
    class: '6A',
    rollNo: '6A04',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana',
  },
  {
    id: 'student5',
    name: 'Edward Wilson',
    class: '6A',
    rollNo: '6A05',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edward',
  },
];

const handleStudentSelect = (studentId: string) => {
  selectedStudent.value = studentId;
  showStudentList.value = false;
};

const selectedStudentData = computed(() => {
  return students.find((s) => s.id === selectedStudent.value);
});
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-4">
          <h1 class="text-2xl font-bold">Academic Journey</h1>
          <div
            v-if="selectedStudent && !showStudentList"
            class="flex items-center gap-3 px-4 py-2 bg-white rounded-xl"
          >
            <img
              :src="selectedStudentData?.avatar"
              :alt="selectedStudentData?.name"
              class="w-8 h-8 rounded-full"
            />
            <div>
              <div class="font-medium">{{ selectedStudentData?.name }}</div>
              <div class="text-sm text-gray-500">
                {{ selectedStudentData?.rollNo }}
              </div>
            </div>
            <button
              @click="showStudentList = true"
              class="ml-4 text-[#0447A8] hover:underline text-sm"
            >
              Change Student
            </button>
          </div>
        </div>
      </div>

      <!-- Student Selection and Content Layout -->
      <div
        class="grid gap-6"
        :class="showStudentList ? 'grid-cols-12' : 'grid-cols-1'"
      >
        <!-- Student List -->
        <div
          v-if="showStudentList"
          class="col-span-3 bg-white rounded-3xl border border-[#ECECEC] p-4 h-fit"
        >
          <h2 class="text-lg font-semibold mb-4">Students</h2>
          <div class="space-y-2">
            <button
              v-for="student in students"
              :key="student.id"
              class="w-full p-3 rounded-xl transition-all duration-300 flex items-center gap-3"
              :class="
                selectedStudent === student.id
                  ? 'bg-blue-50 border-2 border-[#0447A8]'
                  : 'hover:bg-gray-50 border-2 border-transparent'
              "
              @click="handleStudentSelect(student.id)"
            >
              <img
                :src="student.avatar"
                :alt="student.name"
                class="w-10 h-10 rounded-full"
              />
              <div class="text-left">
                <div class="font-medium">{{ student.name }}</div>
                <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
              </div>
            </button>
          </div>
        </div>

        <!-- Main Content -->
        <div :class="showStudentList ? 'col-span-9' : 'col-span-full'">
          <div v-if="selectedStudent">
            <!-- Tabs -->
            <div class="flex gap-4 mb-6">
              <button
                v-for="tab in ['timeline', 'portfolio', 'achievements'] as const "
                :key="tab"
                class="px-4 py-2 rounded-xl transition-all duration-300"
                :class="
                  activeTab === tab
                    ? 'bg-[#0447A8] text-white shadow-lg'
                    : 'bg-white text-gray-700'
                "
                @click="activeTab = tab"
              >
                {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
              </button>
            </div>

            <!-- Tab Content -->
            <TimelineView
              v-if="activeTab === 'timeline'"
              :student-id="selectedStudent"
            />

            <PortfolioView
              v-else-if="activeTab === 'portfolio'"
              :student-id="selectedStudent"
            />

            <AchievementsView v-else :student-id="selectedStudent" />
          </div>

          <div
            v-else
            class="bg-white rounded-3xl border border-[#ECECEC] p-8 text-center"
          >
            <div class="text-6xl mb-4">👈</div>
            <h3 class="text-xl font-semibold mb-2">Select a Student</h3>
            <p class="text-gray-600">
              Choose a student from the list to view their academic journey
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
