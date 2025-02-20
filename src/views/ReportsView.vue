```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import ClassReport from '@/components/reports/ClassReport.vue';
import StudentReport from '@/components/reports/StudentReport.vue';
import ReportTemplateModal from '@/components/reports/ReportTemplateModal.vue';

const activeTab = ref<
  'scholastic' | 'co-scholastic' | 'health' | 'achievements'
>('scholastic');
const selectedStudent = ref<string | null>(null);
const selectedSubject = ref('Mathematics');
const showReportModal = ref(false);

// Mock student data
const students = [
  { id: '1', name: 'Alice Johnson', rollNo: '6A01', class: '6A', section: 'A' },
  { id: '2', name: 'Bob Smith', rollNo: '6A02', class: '6A', section: 'A' },
  { id: '3', name: 'Charlie Brown', rollNo: '6A03', class: '6A', section: 'A' },
  { id: '4', name: 'Diana Miller', rollNo: '6A04', class: '6A', section: 'A' },
  { id: '5', name: 'Edward Wilson', rollNo: '6A05', class: '6A', section: 'A' },
];

// Mock subjects
const subjects = ['Mathematics', 'Science', 'English', 'Social Studies'];

const selectedStudentData = computed(() => {
  if (!selectedStudent.value) return null;
  return students.find((s) => s.id === selectedStudent.value);
});

const handleGenerateReport = () => {
  showReportModal.value = true;
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-4">
          <h1 class="text-2xl font-bold">Reports</h1>
          <select
            v-model="selectedStudent"
            class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
          >
            <option value="">Overall Class Report</option>
            <option
              v-for="student in students"
              :key="student.id"
              :value="student.id"
            >
              {{ student.name }} ({{ student.rollNo }})
            </option>
          </select>
        </div>
        <div class="flex gap-4">
          <select
            v-model="selectedSubject"
            class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
          >
            <option v-for="subject in subjects" :key="subject" :value="subject">
              {{ subject }}
            </option>
          </select>
          <button
            @click="handleGenerateReport"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Generate Report
          </button>
        </div>
      </div>

      <!-- Main Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['scholastic', 'co-scholastic', 'health', 'achievements'] as const"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="
            activeTab === tab
              ? 'bg-[#0447A8] text-white'
              : 'bg-white text-gray-700'
          "
          @click="activeTab = tab"
        >
          {{
            tab
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join('-')
          }}
        </button>
      </div>

      <!-- Report Content -->
      <ClassReport v-if="!selectedStudent" :active-tab="activeTab" />
      <StudentReport
        v-else
        :student-id="selectedStudent"
        :active-tab="activeTab"
      />
    </div>

    <!-- Report Template Modal -->
    <ReportTemplateModal
      v-if="showReportModal"
      :show="showReportModal"
      :type="selectedStudent ? 'student' : 'class'"
      :data="selectedStudent ? selectedStudentData : {}"
      @close="showReportModal = false"
    />
  </div>
</template>
```
