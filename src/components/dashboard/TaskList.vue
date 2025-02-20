```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardStore } from '@/stores/dashboard';
import { useAcademicsStore } from '@/stores/academics';
import TaskDetailsModal from '@/components/academics/TaskDetailsModal.vue';

const props = defineProps<{
  filter: 'all' | 'high' | 'medium' | 'low';
  sortBy: 'deadline' | 'priority';
}>();

const router = useRouter();
const dashboardStore = useDashboardStore();
const academicsStore = useAcademicsStore();

const selectedTask = ref(null);
const showDetailsModal = ref(false);

// Mock tasks with priority
const tasks = computed(() => {
  let filteredTasks = dashboardStore.tasks.map(task => ({
    ...task,
    priority: getPriorityFromDueDate(task.dueDate)
  }));

  if (props.filter !== 'all') {
    filteredTasks = filteredTasks.filter(task => task.priority === props.filter);
  }

  return filteredTasks.sort((a, b) => {
    if (props.sortBy === 'deadline') {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
  });
});

function getPriorityFromDueDate(dueDate: string): 'high' | 'medium' | 'low' {
  const today = new Date();
  const due = new Date(dueDate);
  const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (daysUntilDue <= 2) return 'high';
  if (daysUntilDue <= 5) return 'medium';
  return 'low';
}

function getPriorityWeight(priority: string): number {
  const weights = { high: 3, medium: 2, low: 1 };
  return weights[priority as keyof typeof weights] || 0;
}

const viewTask = (task: any) => {
  // Find corresponding academic task
  const academicTask = academicsStore.tasks.find(t => t.title === task.title);
  if (academicTask) {
    selectedTask.value = academicTask;
    showDetailsModal.value = true;
  }
};
</script>

<template>
  <div class="space-y-3">
    <div 
      v-for="task in tasks" 
      :key="task.id"
      class="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
    >
      <div class="flex items-start gap-3">
        <input 
          type="checkbox" 
          class="mt-1 rounded border-gray-300 text-[#0447A8] focus:ring-[#0447A8]"
          :checked="task.status === 'completed'"
          @click.stop="dashboardStore.markTaskCompleted(task.id)"
        />
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">{{ task.title }}</h3>
            <span 
              class="px-2 py-0.5 text-xs rounded-full"
              :class="{
                'bg-red-50 text-red-700': task.priority === 'high',
                'bg-yellow-50 text-yellow-700': task.priority === 'medium',
                'bg-green-50 text-green-700': task.priority === 'low'
              }"
            >
              {{ task.priority }}
            </span>
          </div>
          <div class="mt-1 text-sm text-gray-600">
            {{ task.subject }}
          </div>
          <div class="mt-2 flex items-center justify-between">
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <span class="flex items-center gap-1">
                📅 {{ new Date(task.dueDate).toLocaleDateString() }}
              </span>
              <span 
                class="px-2 py-0.5 rounded-full text-xs"
                :class="{
                  'bg-blue-50 text-blue-700': task.type === 'grading',
                  'bg-purple-50 text-purple-700': task.type === 'planning',
                  'bg-orange-50 text-orange-700': task.type === 'meeting'
                }"
              >
                {{ task.type }}
              </span>
            </div>
            <button
              v-if="task.type === 'grading'"
              @click="viewTask(task)"
              class="text-sm text-[#0447A8] hover:underline"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Details Modal -->
    <TaskDetailsModal
      v-if="showDetailsModal && selectedTask"
      :show="showDetailsModal"
      :task="selectedTask"
      @close="showDetailsModal = false"
    />
  </div>
</template>
```