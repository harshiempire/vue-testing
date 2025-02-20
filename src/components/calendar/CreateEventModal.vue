```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { CalendarEvent } from '@/types/calendar';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'create', event: Omit<CalendarEvent, 'id'>): void;
}>();

const title = ref('');
const description = ref('');
const type = ref<'exam' | 'event' | 'holiday'>('event');
const startDate = ref('');
const endDate = ref('');
const startTime = ref('');
const endTime = ref('');
const location = ref('');
const selectedClass = ref('');
const subject = ref('');

const classes = ['6A', '6B', '7A', '7B', '8A', '8B'];
const subjects = ['Mathematics', 'Science', 'English', 'Social Studies'];

const handleCreate = () => {
  emit('create', {
    title: title.value,
    description: description.value,
    type: type.value,
    startDate: startDate.value,
    endDate: endDate.value,
    startTime: `${startDate.value}T${startTime.value}:00`,
    endTime: `${endDate.value}T${endTime.value}:00`,
    location: location.value,
    class: selectedClass.value,
    subject: subject.value
  });

  resetForm();
};

const resetForm = () => {
  title.value = '';
  description.value = '';
  type.value = 'event';
  startDate.value = '';
  endDate.value = '';
  startTime.value = '';
  endTime.value = '';
  location.value = '';
  selectedClass.value = '';
  subject.value = '';
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Add Event</h2>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Event Type
          </label>
          <select
            v-model="type"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          >
            <option value="event">Event</option>
            <option value="exam">Exam</option>
            <option value="holiday">Holiday</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            v-model="title"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Event title"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            v-model="description"
            rows="3"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Event description"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              v-model="startDate"
              type="date"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              v-model="endDate"
              type="date"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              :min="startDate"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              v-model="startTime"
              type="time"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              v-model="endTime"
              type="time"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
        </div>

        <div v-if="type !== 'holiday'">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            v-model="location"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            placeholder="Event location"
          />
        </div>

        <div v-if="type === 'exam'" class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <select
              v-model="selectedClass"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option value="">Select Class</option>
              <option v-for="class_ in classes" :key="class_" :value="class_">
                {{ class_ }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              v-model="subject"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option value="">Select Subject</option>
              <option v-for="sub in subjects" :key="sub" :value="sub">
                {{ sub }}
              </option>
            </select>
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
            @click="handleCreate"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            :disabled="!title || !startDate || !endDate"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
```