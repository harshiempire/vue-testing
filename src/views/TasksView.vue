```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDashboardStore } from '@/stores/dashboard';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';

const dashboardStore = useDashboardStore();
const activeTab = ref<String>('upcoming');
const selectedFilter = ref<'all' | 'high' | 'medium' | 'low'>('all');
const selectedSort = ref<'deadline' | 'priority'>('deadline');

const filteredTasks = computed(() => {
  let tasks = dashboardStore.tasks.map((task) => ({
    ...task,
    priority: getPriorityFromDueDate(task.dueDate),
  }));

  // Filter by status
  switch (activeTab.value) {
    case 'completed':
      tasks = tasks.filter((task) => task.status === 'completed');
      break;
    case 'pending':
      tasks = tasks.filter(
        (task) =>
          task.status === 'pending' && new Date(task.dueDate) < new Date()
      );
      break;
    case 'upcoming':
      tasks = tasks.filter(
        (task) =>
          task.status === 'pending' && new Date(task.dueDate) >= new Date()
      );
      break;
  }

  // Filter by priority
  if (selectedFilter.value !== 'all') {
    tasks = tasks.filter((task) => task.priority === selectedFilter.value);
  }

  // Sort tasks
  return tasks.sort((a, b) => {
    if (selectedSort.value === 'deadline') {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
  });
});

function getPriorityFromDueDate(dueDate: string): 'high' | 'medium' | 'low' {
  const today = new Date();
  const due = new Date(dueDate);
  const daysUntilDue = Math.ceil(
    (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysUntilDue <= 2) return 'high';
  if (daysUntilDue <= 5) return 'medium';
  return 'low';
}

function getPriorityWeight(priority: string): number {
  const weights = { high: 3, medium: 2, low: 1 };
  return weights[priority as keyof typeof weights] || 0;
}

const handleMarkComplete = (taskId: string) => {
  dashboardStore.markTaskCompleted(taskId);
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Tasks</h1>
        <div class="flex gap-4">
          <select
            v-model="selectedFilter"
            class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
          >
            <option value="all">All Priority</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <select
            v-model="selectedSort"
            class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['upcoming', 'pending', 'completed']"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="
            activeTab === tab
              ? 'bg-[#0447A8] text-white'
              : 'bg-white text-gray-700'
          "
          @click="activeTab = tab"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Tasks Grid -->
      <div class="grid grid-cols-3 gap-6">
        <DashboardCard v-for="task in filteredTasks" title="" :key="task.id">
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <h3 class="font-medium">{{ task.title }}</h3>
              <span
                class="px-2 py-0.5 text-xs rounded-full"
                :class="{
                  'bg-red-50 text-red-700': task.priority === 'high',
                  'bg-yellow-50 text-yellow-700': task.priority === 'medium',
                  'bg-green-50 text-green-700': task.priority === 'low',
                }"
              >
                {{ task.priority }}
              </span>
            </div>

            <p class="text-sm text-gray-600">{{ task.description }}</p>

            <div class="flex items-center justify-between text-sm">
              <div class="text-gray-500">
                {{ task.subject }}
              </div>
              <span
                class="px-2 py-0.5 rounded-full text-xs"
                :class="{
                  'bg-blue-50 text-blue-700': task.type === 'grading',
                  'bg-purple-50 text-purple-700': task.type === 'planning',
                  'bg-orange-50 text-orange-700': task.type === 'meeting',
                }"
              >
                {{ task.type }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500">
                Due: {{ new Date(task.dueDate).toLocaleDateString() }}
              </div>
              <button
                v-if="task.status === 'pending'"
                @click="handleMarkComplete(task.id)"
                class="text-sm text-[#0447A8] hover:underline"
              >
                Mark Complete
              </button>
              <span v-else class="text-sm text-green-600"> ✓ Completed </span>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  </div>
</template>
```
