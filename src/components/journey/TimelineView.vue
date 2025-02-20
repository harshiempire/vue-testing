<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useJourneyStore } from "@/stores/journey";
import type { TimelineEvent } from "@/types/journey";

const props = defineProps<{
  studentId: string;
}>();

const journeyStore = useJourneyStore();
type FilterType = "scholastic" | "co-scholastic" | "all";
const selectedFilter = ref<FilterType>("all");
const selectedEvent = ref<TimelineEvent | null>(null);

const filteredEvents = computed(() => {
  let events = journeyStore.events;
  if (selectedFilter.value !== "all") {
    events = events.filter((event) => event.category === selectedFilter.value);
  }
  return events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
});

// Group events into rows of 3
const eventRows = computed(() => {
  const rows = [];
  const events = [...filteredEvents.value];

  while (events.length) {
    rows.push(events.splice(0, 3));
  }

  return rows;
});

const getEventIcon = (event: TimelineEvent) => {
  const icons = {
    test: "📝",
    activity: "🎯",
    achievement: "🏆",
    event: "🎉",
    assessment: "📊",
  };
  return icons[event.type];
};

const getEventColor = (event: TimelineEvent) => {
  const colors = {
    test: ["#60A5FA", "#2563EB"],
    activity: ["#34D399", "#059669"],
    achievement: ["#A78BFA", "#7C3AED"],
    event: ["#FBBF24", "#D97706"],
    assessment: ["#FCD34D", "#B45309"],
  };
  return colors[event.type];
};

const getEventStatus = (event: TimelineEvent) => {
  const today = new Date();
  const eventDate = new Date(event.date);

  if (event.status === "completed") return "completed";
  if (eventDate > today) return "locked";
  return "available";
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

const showEventDetails = (event: TimelineEvent) => {
  if (getEventStatus(event) !== "locked") {
    selectedEvent.value = event;
  }
};
</script>

<template>
  <div class="space-y-6">
    <!-- Filters -->
    <div class="flex gap-4">
      <button
        v-for="filter in ['all', 'scholastic', 'co-scholastic']"
        :key="filter"
        class="px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
        :class="
          selectedFilter === filter
            ? 'bg-[#0447A8] text-white shadow-lg'
            : 'bg-white text-gray-700'
        "
        @click="selectedFilter = filter as FilterType"
      >
        {{
          filter === "all"
            ? "All"
            : filter.charAt(0).toUpperCase() + filter.slice(1)
        }}
      </button>
    </div>

    <!-- Journey Map -->
    <div
      class="relative min-h-[600px] bg-gradient-to-b from-blue-50 to-purple-50 rounded-3xl p-8 overflow-hidden"
    >
      <!-- Decorative Background -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute w-20 h-20 bg-blue-500 rounded-full top-1/4 left-1/4 animate-float"
        ></div>
        <div
          class="absolute w-16 h-16 bg-purple-500 rounded-full top-3/4 right-1/3 animate-float-delayed"
        ></div>
        <div
          class="absolute w-24 h-24 bg-green-500 rounded-full bottom-1/4 right-1/4 animate-float"
        ></div>
      </div>

      <!-- Journey Path -->
      <div class="relative z-10">
        <!-- Event Rows -->
        <div class="space-y-16">
          <div
            v-for="(row, rowIndex) in eventRows"
            :key="rowIndex"
            class="relative"
          >
            <!-- Connecting Lines -->
            <svg class="absolute top-8 left-0 w-full h-2 -z-10">
              <line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="grey"
                stroke-width="2"
                stroke-dasharray="4 4"
              />
            </svg>

            <div class="flex justify-between">
              <div
                v-for="(event, index) in row"
                :key="event.id"
                class="w-1/3 px-4"
              >
                <!-- Node -->
                <div
                  class="relative group cursor-pointer"
                  @click="showEventDetails(event)"
                >
                  <!-- Node Background -->
                  <div
                    class="w-16 h-16 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    :class="{
                      'animate-node-completed':
                        getEventStatus(event) === 'completed',
                      'animate-node-available':
                        getEventStatus(event) === 'available',
                      'opacity-50': getEventStatus(event) === 'locked',
                    }"
                    :style="{
                      background: `linear-gradient(135deg, ${getEventColor(event)[0]}, ${getEventColor(event)[1]})`,
                    }"
                  >
                    <!-- Icon -->
                    <div
                      class="absolute inset-0 flex items-center justify-center text-2xl text-white"
                    >
                      {{ getEventIcon(event) }}
                    </div>

                    <!-- Glow Effect -->
                    <div
                      class="absolute inset-0 rounded-2xl opacity-50 blur-lg transition-opacity group-hover:opacity-100"
                      :style="{
                        background: `linear-gradient(135deg, ${getEventColor(event)[0]}, ${getEventColor(event)[1]})`,
                      }"
                    ></div>

                    <!-- Lock Icon for Locked Events -->
                    <div
                      v-if="getEventStatus(event) === 'locked'"
                      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl"
                    >
                      <span class="text-white text-xl">🔒</span>
                    </div>
                  </div>

                  <!-- Date Badge -->
                  <div
                    class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                    :class="{
                      'bg-white text-gray-700':
                        getEventStatus(event) !== 'locked',
                      'bg-gray-200 text-gray-500':
                        getEventStatus(event) === 'locked',
                    }"
                  >
                    {{ formatDate(event.date) }}
                  </div>

                  <!-- Hover Tooltip -->
                  <div
                    class="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <div class="bg-white rounded-xl shadow-lg p-3 text-center">
                      <div class="font-medium text-sm">{{ event.title }}</div>
                      <div class="text-xs text-gray-500 mt-1">
                        {{ event.type }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Details Modal -->
    <div
      v-if="selectedEvent"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="selectedEvent = null"
    >
      <div
        class="bg-white rounded-3xl p-6 w-full max-w-lg transform transition-all duration-300 animate-modal-in"
      >
        <div class="flex justify-between items-start mb-6">
          <div>
            <div class="flex items-center gap-3">
              <span class="text-3xl">{{ getEventIcon(selectedEvent) }}</span>
              <h3 class="text-xl font-bold">{{ selectedEvent.title }}</h3>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              {{ formatDate(selectedEvent.date) }}
            </div>
          </div>
          <button
            @click="selectedEvent = null"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <p class="text-gray-600 mb-4">{{ selectedEvent.description }}</p>

        <div v-if="selectedEvent.score !== undefined" class="mb-4">
          <div class="text-sm font-medium mb-2">Score</div>
          <div class="flex items-center gap-2">
            <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full animate-score-fill"
                :style="{
                  width: `${(selectedEvent.score / selectedEvent.maxScore) * 100}%`,
                  background: `linear-gradient(to right, ${getEventColor(selectedEvent)[0]}, ${getEventColor(selectedEvent)[1]})`,
                }"
              ></div>
            </div>
            <div class="font-medium">
              {{ selectedEvent.score }}/{{ selectedEvent.maxScore }}
            </div>
          </div>
        </div>

        <div v-if="selectedEvent.evidence?.length" class="mb-4">
          <div class="text-sm font-medium mb-2">Evidence</div>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="(file, index) in selectedEvent.evidence"
              :key="index"
              :href="file.url"
              target="_blank"
              class="px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View {{ file.type }}
            </a>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            @click="selectedEvent = null"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Path Animation */
.journey-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawPath 2s ease-out forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Node Animations */
.animate-node-completed {
  animation: nodeCompleted 2s infinite;
}

.animate-node-available {
  animation: nodeAvailable 3s infinite;
}

@keyframes nodeCompleted {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

@keyframes nodeAvailable {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0);
  }
}

/* Floating Background Animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Modal Animation */
.animate-modal-in {
  animation: modalIn 0.3s ease-out;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Score Animation */
.animate-score-fill {
  animation: scoreFill 1s ease-out;
}

@keyframes scoreFill {
  from {
    width: 0;
  }
}

/* Hover Effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1) rotate(12deg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .journey-map {
    padding: 4rem 1rem;
  }

  .node {
    transform: scale(0.8);
  }
}
</style>
