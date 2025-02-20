<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Academic Calendar</h1>
        <div class="flex gap-4">
          <div class="flex gap-4">
            <button
              class="px-3 py-1 text-sm"
              :class="
                selectedFilter === filter.id
                  ? 'text-[#0447A8]'
                  : 'text-gray-600'
              "
              v-for="filter in filters"
              :key="filter.id"
              @click="selectedFilter = filter.id"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Calendar Header -->
      <div class="bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6">
        <div class="flex justify-between items-center">
          <button
            class="p-2 hover:bg-gray-50 rounded-lg"
            @click="previousMonth"
          >
            ←
          </button>
          <h2 class="text-lg font-medium">
            {{ currentMonthYear }}
          </h2>
          <button class="p-2 hover:bg-gray-50 rounded-lg" @click="nextMonth">
            →
          </button>
        </div>
      </div>

      <!-- Month View with Agenda -->
      <div class="grid grid-cols-6 gap-6">
        <!-- Calendar -->
        <div
          class="col-span-8 bg-white rounded-3xl border border-[#ECECEC] overflow-hidden"
        >
          <!-- Weekday Headers -->
          <div class="grid grid-cols-7 border-b">
            <div
              v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
              :key="day"
              class="px-2 py-3 text-center text-sm font-medium text-gray-700 border-r last:border-r-0"
            >
              {{ day }}
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="grid grid-cols-7 grid-rows-6">
            <div
              v-for="date in calendarDays"
              :key="date.date"
              class="min-h-[120px] p-2 border-b border-r last:border-r-0"
              :class="{
                'bg-gray-50': !date.isCurrentMonth,
                'bg-blue-50': date.isToday,
              }"
            >
              <div class="flex justify-between items-start">
                <span
                  class="text-sm"
                  :class="{
                    'text-gray-400': !date.isCurrentMonth,
                    'font-medium': date.isToday,
                  }"
                >
                  {{ new Date(date.date).getDate() }}
                </span>
              </div>
              <!-- Events -->
              <div class="mt-1 space-y-1">
                <div
                  v-for="event in getEventsForDate(date.date)"
                  :key="event.id"
                  class="px-2 py-1 text-xs rounded truncate cursor-pointer"
                  :class="{
                    'bg-blue-100 text-blue-700': event.type === 'exam',
                    'bg-green-100 text-green-700': event.type === 'event',
                    'bg-red-100 text-red-700': event.type === 'holiday',
                  }"
                  @click="openEventDetails(event)"
                >
                  {{ event.title }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Agenda -->
      </div>
    </div>

    <!-- Event Details Modal -->
    <EventDetailsModal
      v-if="selectedEvent"
      :show="true"
      :event="selectedEvent"
      @close="selectedEvent = null"
      @edit="handleEditEvent"
      @delete="handleDeleteEvent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCalendarStore } from "@/stores/calendar";
import EventDetailsModal from "@/components/calendar/EventDetailsModal.vue";
import type { CalendarEvent } from "@/types/calendar";

const calendarStore = useCalendarStore();
const currentDate = ref(new Date());
const selectedEvent = ref<CalendarEvent | null>(null);
const selectedFilter = ref<"all" | "exam" | "event" | "holiday">("all");

const filters = [
  { id: "all" as const, label: "All Events" },
  { id: "exam" as const, label: "Exams" },
  { id: "event" as const, label: "Events" },
  { id: "holiday" as const, label: "Holidays" },
] as const;

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
});

const previousMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() - 1);
  currentDate.value = date;
};

const nextMonth = () => {
  const date = new Date(currentDate.value);
  date.setMonth(date.getMonth() + 1);
  currentDate.value = date;
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

const formatTime = (time: string) => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(time));
};

const openEventDetails = (event: CalendarEvent) => {
  selectedEvent.value = event;
};

const handleEditEvent = (event: CalendarEvent) => {
  calendarStore.updateEvent(event);
  selectedEvent.value = null;
};

const handleDeleteEvent = (eventId: string) => {
  calendarStore.deleteEvent(eventId);
  selectedEvent.value = null;
};

const calendarDays = computed(() => {
  // Implement calendar days logic
  return [];
});

const getEventsForDate = (date: Date) => {
  // Implement event fetching logic
  return [];
};
</script>
