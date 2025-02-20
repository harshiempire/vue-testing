<script setup lang="ts">
import { ref } from 'vue';
import type { CalendarEvent } from '@/types/calendar';

const props = defineProps<{
  show: boolean;
  event: CalendarEvent;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'edit', event: CalendarEvent): void;
  (e: 'delete', eventId: string): void;
}>();

const isEditing = ref(false);
const editedEvent = ref({ ...props.event });

const handleSave = () => {
  emit('edit', editedEvent.value);
  isEditing.value = false;
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

const formatTime = (time: string) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  }).format(new Date(time));
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
      <div class="flex justify-between items-start mb-6">
        <div>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-bold">{{ event.title }}</h2>
            <span 
              class="px-3 py-1 text-sm rounded-lg"
              :class="{
                'bg-blue-50 text-blue-700': event.type === 'exam',
                'bg-green-50 text-green-700': event.type === 'event',
                'bg-red-50 text-red-700': event.type === 'holiday'
              }"
            >
              {{ event.type.charAt(0).toUpperCase() + event.type.slice(1) }}
            </span>
          </div>
          <div v-if="event.class && event.subject" class="mt-1 text-sm text-gray-600">
            {{ event.subject }} | Class {{ event.class }}
          </div>
        </div>
        <button 
          @click="emit('close')"
          class="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div v-if="!isEditing" class="space-y-6">
        <div class="text-gray-600">{{ event.description }}</div>

        <div class="space-y-3">
          <div class="flex items-center gap-2 text-sm">
            <span>📅</span>
            <span>{{ formatDate(event.startDate) }}</span>
            <span v-if="event.startDate !== event.endDate">
              - {{ formatDate(event.endDate) }}
            </span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span>⏰</span>
            <span>{{ formatTime(event.startTime) }} - {{ formatTime(event.endTime) }}</span>
          </div>
          <div v-if="event.location" class="flex items-center gap-2 text-sm">
            <span>📍</span>
            <span>{{ event.location }}</span>
          </div>
        </div>

        <div class="flex justify-end gap-4">
         
        </div>
      </div>

      <div v-else class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            v-model="editedEvent.title"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            v-model="editedEvent.description"
            rows="3"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              v-model="editedEvent.startDate"
              type="date"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              v-model="editedEvent.endDate"
              type="date"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              :min="editedEvent.startDate"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              v-model="editedEvent.startTime"
              type="time"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              v-model="editedEvent.endTime"
              type="time"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>
        </div>

        <div v-if="editedEvent.type !== 'holiday'">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            v-model="editedEvent.location"
            type="text"
            class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
          />
        </div>

        <div class="flex justify-end gap-4">
          <button
            @click="isEditing = false"
            class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
          >
            Cancel
          </button>
          <button
            @click="handleSave"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>