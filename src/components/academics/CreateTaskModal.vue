<script setup lang="ts">
import { ref } from 'vue';
import { useAcademicsStore } from '@/stores/academics';
import type { Task } from '@/types/academics';

defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'create', task: Task): void;
}>();

const academicsStore = useAcademicsStore();

const taskTypes = [
  { id: 'activity', label: 'Activity Based Learning' },
  { id: 'project', label: 'Project Based Learning' },
  { id: 'mcq', label: 'MCQ Test' }
];

const activities = [
  { id: 'observation', label: 'Scientific Observation' },
  { id: 'experiment', label: 'Laboratory Experiment' },
  { id: 'fieldwork', label: 'Field Work' },
  { id: 'presentation', label: 'Presentation' },
  { id: 'research', label: 'Research Project' },
  { id: 'portfolio', label: 'Portfolio Creation' },
  { id: 'debate', label: 'Class Debate' },
  { id: 'essay', label: 'Essay Writing' }
];

const title = ref('');
const description = ref('');
const type = ref<Task['type']>('activity');
const category = ref<'scholastic' | 'co-scholastic'>('scholastic');
const activity = ref(activities[0].id);
const startDate = ref('');
const startTime = ref('');
const dueDate = ref('');
const dueTime = ref('');
const maxMarks = ref(100);
const enablePeerReview = ref(false);

// Default rubrics from the store
const defaultRubrics = academicsStore.tasks[0]?.rubrics || [];

const createTask = () => {
  const task: Task = {
    id: crypto.randomUUID(),
    title: title.value,
    description: description.value,
    type: type.value,
    category: category.value,
    subject: 'Mathematics', // This would come from the current teacher's subject
    class: '6A', // This would come from the selected class
    dueDate: `${dueDate.value}T${dueTime.value}`,
    maxMarks: maxMarks.value,
    status: 'assigned',
    createdAt: new Date().toISOString(),
    activity: activity.value,
    rubrics: defaultRubrics
  };

  emit('create', task);
  resetForm();
};

const resetForm = () => {
  title.value = '';
  description.value = '';
  type.value = 'activity';
  category.value = 'scholastic';
  activity.value = activities[0].id;
  startDate.value = '';
  startTime.value = '';
  dueDate.value = '';
  dueTime.value = '';
  maxMarks.value = 100;
  enablePeerReview.value = false;
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Create New Task</h2>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <form @submit.prevent="createTask" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            v-model="title"
            type="text"
            required
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            v-model="description"
            required
            rows="3"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Task Type
            </label>
            <select
              v-model="type"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option v-for="type in taskTypes" :key="type.id" :value="type.id">
                {{ type.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Activity Type
            </label>
            <select
              v-model="activity"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option v-for="act in activities" :key="act.id" :value="act.id">
                {{ act.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              v-model="startDate"
              type="date"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              v-model="startTime"
              type="time"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              v-model="dueDate"
              type="date"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Due Time
            </label>
            <input
              v-model="dueTime"
              type="time"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Maximum Marks
          </label>
          <input
            v-model="maxMarks"
            type="number"
            required
            min="0"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          />
        </div>

        <div class="flex items-center">
          <input
            v-model="enablePeerReview"
            type="checkbox"
            id="enablePeerReview"
            class="h-4 w-4 text-[#0447A8] border-gray-300 rounded"
          />
          <label for="enablePeerReview" class="ml-2 text-sm text-gray-700">
            Enable automatic peer review assignment
          </label>
        </div>

        <div class="flex justify-end gap-4">
          <button
            type="button"
            @click="emit('close')"
            class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  </div>
</template>