<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePTMStore } from '@/stores/ptm';
import type { PTMSession, Parent, TimeSlot } from '@/types/ptm';

const ptmStore = usePTMStore();
const showCreateModal = ref(false);
const showAvailabilityModal = ref(false);
const selectedSession = ref<PTMSession | null>(null);
const activeTab = ref('in_progress');
const selectedClass = ref('all');
const selectedDate = ref('');

const assignedClasses = ['6A', '6B', '7A', '8A'];

const newSession = ref({
  class: assignedClasses[0],
  startDate: '',
  startTime: '09:00',
  endDate: '',
  endTime: '15:00',
  totalParents: 40
});

const newTimeSlot = ref({
  date: '',
  startTime: ptmStore.teacherSchedule.lastPeriodEndTime,
  endTime: ''
});

const filteredInProgressSessions = computed(() => {
  if (selectedClass.value === 'all') {
    return ptmStore.inProgressSessions;
  }
  return ptmStore.inProgressSessions.filter(session => session.class === selectedClass.value);
});

const filteredCompletedSessions = computed(() => {
  if (selectedClass.value === 'all') {
    return ptmStore.completedSessions;
  }
  return ptmStore.completedSessions.filter(session => session.class === selectedClass.value);
});

const selectedDateSlots = computed(() => {
  if (!selectedDate.value) return [];
  return ptmStore.getTimeSlotsByDate(selectedDate.value);
});

const handleCreateSession = () => {
  ptmStore.createSession({
    class: newSession.value.class,
    startDate: `${newSession.value.startDate}T${newSession.value.startTime}:00`,
    endDate: `${newSession.value.endDate}T${newSession.value.endTime}:00`,
    status: 'scheduled',
    totalParents: newSession.value.totalParents
  });
  showCreateModal.value = false;
};

const handleAddTimeSlot = () => {
  ptmStore.addTimeSlot(
    newTimeSlot.value.date,
    newTimeSlot.value.startTime,
    newTimeSlot.value.endTime
  );
  newTimeSlot.value.endTime = '';
};

const formatDateTime = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatTime = (time: string) => {
  return time.substring(0, 5); // Format HH:mm
};

// Mock parent list for demonstration
const mockParents: Parent[] = [
  {
    id: 'p1',
    name: 'Mr. Sharma',
    studentName: 'Rahul Sharma',
    rollNo: '6A01',
    attended: false
  },
  {
    id: 'p2',
    name: 'Mrs. Patel',
    studentName: 'Priya Patel',
    rollNo: '6A02',
    attended: false
  }
];

const handleMarkAttendance = (sessionId: string, parent: Parent) => {
  ptmStore.markParentAttendance(sessionId, parent);
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Parent Teacher Meetings</h1>
        <div class="flex gap-4">
          <select
            v-model="selectedClass"
            class="px-4 py-2 border border-[#ECECEC] rounded-xl bg-white"
          >
            <option value="all">All Classes</option>
            <option v-for="class_ in assignedClasses" :key="class_" :value="class_">
              Class {{ class_ }}
            </option>
          </select>
          <button 
            @click="showAvailabilityModal = true"
            class="px-4 py-2 border border-[#ECECEC] bg-white text-gray-700 rounded-xl"
          >
            Set Availability
          </button>
          <button 
            @click="showCreateModal = true"
            class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
          >
            Schedule PTM
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in [
            { id: 'in_progress', label: 'In Progress' },
            { id: 'completed', label: 'Completed' },
            { id: 'one_on_one', label: 'One-on-One Meetings' }
          ]"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 rounded-xl"
          :class="activeTab === tab.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- One-on-One Meetings Tab -->
      <div v-if="activeTab === 'one_on_one'" class="space-y-6">
        <!-- Available Slots Section -->
        <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              v-model="selectedDate"
              type="date"
              class="px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div v-if="selectedDate" class="space-y-4">
            <h3 class="text-lg font-semibold">Available Time Slots</h3>
            <div class="grid gap-4">
              <div 
                v-for="slot in selectedDateSlots"
                :key="slot.id"
                class="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <div class="font-medium">
                    {{ formatTime(slot.startTime) }} - {{ formatTime(slot.endTime) }}
                  </div>
                  <div v-if="slot.booking" class="text-sm text-gray-600 mt-1">
                    Booked by: {{ slot.booking.parentName }} 
                    ({{ slot.booking.studentName }}, Class {{ slot.booking.class }})
                  </div>
                </div>
                <span 
                  class="px-3 py-1 text-sm rounded-lg"
                  :class="slot.status === 'available' ? 
                    'bg-green-50 text-green-700' : 
                    'bg-blue-50 text-blue-700'"
                >
                  {{ slot.status.charAt(0).toUpperCase() + slot.status.slice(1) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Individual Meetings -->
        <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
          <h3 class="text-lg font-semibold mb-4">Upcoming Individual Meetings</h3>
          <div class="space-y-4">
            <div 
              v-for="meeting in ptmStore.upcomingIndividualMeetings"
              :key="meeting.id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div>
                <div class="font-medium">
                  {{ new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ formatTime(meeting.startTime) }} - {{ formatTime(meeting.endTime) }}
                </div>
                <div class="text-sm text-gray-600 mt-1">
                  {{ meeting.booking?.parentName }} ({{ meeting.booking?.studentName }}, Class {{ meeting.booking?.class }})
                </div>
              </div>
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
                Upcoming
              </span>
            </div>
          </div>
        </div>

        <!-- Completed Individual Meetings -->
        <div class="bg-white rounded-3xl border border-[#ECECEC] p-6">
          <h3 class="text-lg font-semibold mb-4">Completed Individual Meetings</h3>
          <div class="space-y-4">
            <div 
              v-for="meeting in ptmStore.completedIndividualMeetings"
              :key="meeting.id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div>
                <div class="font-medium">
                  {{ new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ formatTime(meeting.startTime) }} - {{ formatTime(meeting.endTime) }}
                </div>
                <div class="text-sm text-gray-600 mt-1">
                  {{ meeting.booking?.parentName }} ({{ meeting.booking?.studentName }}, Class {{ meeting.booking?.class }})
                </div>
              </div>
              <span class="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress Sessions -->
      <div v-else-if="activeTab === 'in_progress'" class="grid gap-6">
        <div 
          v-for="session in filteredInProgressSessions"
          :key="session.id"
          class="bg-white rounded-3xl border border-[#ECECEC] p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold mb-2">
                Class {{ session.class }} PTM
              </h3>
              <div class="space-y-1 text-sm text-gray-600">
                <div>Start: {{ formatDateTime(session.startDate) }}</div>
                <div>End: {{ formatDateTime(session.endDate) }}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-lg font-medium">
                {{ session.attendedParents.length }} / {{ session.totalParents }}
              </div>
              <div class="text-sm text-gray-600">Parents Attended</div>
            </div>
          </div>

          <!-- Parent List -->
          <div v-if="selectedSession?.id === session.id" class="mt-4">
            <div class="bg-gray-50 rounded-xl p-4">
              <div class="space-y-3">
                <div 
                  v-for="parent in mockParents"
                  :key="parent.id"
                  class="flex items-center justify-between bg-white p-3 rounded-lg"
                >
                  <div>
                    <div class="font-medium">{{ parent.name }}</div>
                    <div class="text-sm text-gray-600">
                      {{ parent.studentName }} ({{ parent.rollNo }})
                    </div>
                  </div>
                  <button
                    v-if="!session.attendedParents.some(p => p.id === parent.id)"
                    @click="handleMarkAttendance(session.id, parent)"
                    class="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm"
                  >
                    Mark Present
                  </button>
                  <span
                    v-else
                    class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
                  >
                    Attended
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="selectedSession = selectedSession?.id === session.id ? null : session"
            class="mt-4 text-[#0447A8] text-sm"
          >
            {{ selectedSession?.id === session.id ? 'Hide' : 'View' }} Parent List
          </button>
        </div>
      </div>

      <!-- Completed Sessions -->
      <div v-else class="grid gap-6">
        <div 
          v-for="session in filteredCompletedSessions"
          :key="session.id"
          class="bg-white rounded-3xl border border-[#ECECEC] p-6"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold mb-2">
                Class {{ session.class }} PTM
              </h3>
              <div class="space-y-1 text-sm text-gray-600">
                <div>Conducted on: {{ formatDateTime(session.startDate) }}</div>
                <div>{{ session.attendedParents.length }} out of {{ session.totalParents }} parents attended</div>
              </div>
            </div>
            <span class="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Set Availability Modal -->
    <div v-if="showAvailabilityModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Set Availability</h2>
          <button 
            @click="showAvailabilityModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              v-model="newTimeSlot.date"
              type="date"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input
                v-model="newTimeSlot.startTime"
                type="time"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
                :min="ptmStore.teacherSchedule.lastPeriodEndTime"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <input
                v-model="newTimeSlot.endTime"
                type="time"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
                :min="newTimeSlot.startTime"
              />
            </div>
          </div>

          <div class="flex justify-end gap-4">
            <button
              @click="showAvailabilityModal = false"
              class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              @click="handleAddTimeSlot"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
              :disabled="!newTimeSlot.date || !newTimeSlot.startTime || !newTimeSlot.endTime"
            >
              Add Time Slot
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create PTM Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Schedule PTM</h2>
          <button 
            @click="showCreateModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <select
              v-model="newSession.class"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option v-for="class_ in assignedClasses" :key="class_" :value="class_">
                Class {{ class_ }}
              </option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                v-model="newSession.startDate"
                type="date"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input
                v-model="newSession.startTime"
                type="time"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                v-model="newSession.endDate"
                type="date"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <input
                v-model="newSession.endTime"
                type="time"
                class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Total Parents
            </label>
            <input
              v-model="newSession.totalParents"
              type="number"
              min="1"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div class="flex justify-end gap-4">
            <button
              @click="showCreateModal = false"
              class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              @click="handleCreateSession"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              Schedule PTM
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>