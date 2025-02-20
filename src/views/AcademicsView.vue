```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAcademicsStore } from '@/stores/academics';
import TaskCard from '@/components/academics/TaskCard.vue';
import CreateTaskModal from '@/components/academics/CreateTaskModal.vue';
import ResultsUploadModal from '@/components/academics/ResultsUploadModal.vue';
import type { Task } from '@/types/academics';

const route = useRoute();
const academicsStore = useAcademicsStore();
const activeTab = ref<'tasks' | 'results'>('tasks');
const showCreateModal = ref(false);
const showResultsModal = ref(false);
const selectedCategory = ref<'all' | 'scholastic' | 'co-scholastic'>('all');

const tabs = [
  { id: 'pending', label: 'Pending', count: academicsStore.pendingTasks.length },
  { id: 'submitted', label: 'Submitted', count: academicsStore.submittedTasks.length },
  { id: 'reviewed', label: 'Reviewed', count: academicsStore.reviewedTasks.length }
];

const taskStatus = ref('pending');

// Handle task navigation from dashboard
onMounted(() => {
  const taskId = route.query.taskId;
  if (taskId) {
    activeTab.value = 'tasks';
    const task = academicsStore.tasks.find(t => t.id === taskId);
    if (task) {
      taskStatus.value = task.status;
    }
  }
});

const filteredTasks = computed(() => {
  let tasks: Task[] = [];
  
  // First filter by status
  if (taskStatus.value === 'pending') {
    tasks = [...academicsStore.pendingTasks];
  } else if (taskStatus.value === 'submitted') {
    tasks = [...academicsStore.submittedTasks];
  } else {
    tasks = [...academicsStore.reviewedTasks];
  }

  // Then filter by category if not 'all'
  if (selectedCategory.value !== 'all') {
    tasks = tasks.filter(task => task.category === selectedCategory.value);
  }

  return tasks;
});

const handleCreateTask = (task: Task) => {
  academicsStore.tasks.push(task);
  showCreateModal.value = false;
};

// Mock student data
const students = [
  { id: '1', name: 'Alice Johnson', rollNo: '6A01' },
  { id: '2', name: 'Bob Smith', rollNo: '6A02' },
  { id: '3', name: 'Charlie Brown', rollNo: '6A03' },
  { id: '4', name: 'Diana Miller', rollNo: '6A04' },
  { id: '5', name: 'Edward Wilson', rollNo: '6A05' }
];

const handleResultsUpload = (results: any) => {
  // Here you would update the results in your store
  console.log('Uploading results:', results);
  showResultsModal.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Academics</h1>
        <div class="flex gap-4">
          <button 
            v-if="activeTab === 'tasks'"
            @click="showCreateModal = true"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Create New Task
          </button>
          <button 
            v-else
            @click="showResultsModal = true"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Upload Results
          </button>
        </div>
      </div>

      <!-- Main Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['tasks', 'results'] as const"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
          @click="activeTab = tab"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Tasks Section -->
      <template v-if="activeTab === 'tasks'">
        <!-- Category Filter -->
        <div class="flex gap-4 mb-6">
          <button
            v-for="category in ['all', 'scholastic', 'co-scholastic'] as const"
            :key="category"
            class="px-4 py-2 rounded-xl"
            :class="selectedCategory === category ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
            @click="selectedCategory = category"
          >
            {{ category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1) }}
          </button>
        </div>

        <!-- Status Tabs -->
        <div class="flex gap-4 mb-6">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="px-4 py-2 rounded-xl flex items-center gap-2"
            :class="taskStatus === tab.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
            @click="taskStatus = tab.id"
          >
            {{ tab.label }}
            <span 
              class="px-2 py-0.5 text-sm rounded-lg"
              :class="taskStatus === tab.id ? 'bg-white/20' : 'bg-gray-100'"
            >
              {{ tab.count }}
            </span>
          </button>
        </div>

        <!-- Task List -->
        <div class="space-y-6">
          <TaskCard
            v-for="task in filteredTasks"
            :key="task.id"
            :task="task"
          />
        </div>
      </template>

      <!-- Results Section -->
      <template v-else>
        <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA1</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA2</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">SA1</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA3</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA4</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">SA2</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="student in students" :key="student.id" class="hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <div class="font-medium">{{ student.name }}</div>
                    <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                  </td>
                  <td v-for="exam in ['FA1', 'FA2', 'SA1', 'FA3', 'FA4', 'SA2']" :key="exam" class="px-4 py-3">
                    <div class="text-center">-</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </div>

    <CreateTaskModal
      :show="showCreateModal"
      @close="showCreateModal = false"
      @create="handleCreateTask"
    />

    <ResultsUploadModal
      v-if="showResultsModal"
      :show="showResultsModal"
      :students="students"
      @close="showResultsModal = false"
      @upload="handleResultsUpload"
    />
  </div>
</template>
```