```vue
<script setup lang="ts">
import { ref } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import { useCPDStore } from '@/stores/cpd';

const cpdStore = useCPDStore();
const activeTab = ref<'records' | 'report' | 'training'>('records');
const showAddModal = ref(false);

const newRecord = ref({
  eventName: '',
  conductedBy: '',
  date: '',
  keyLearnings: '',
  hoursCompleted: 0,
  type: 'paper_presentation',
  evidence: null as File | null
});

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    newRecord.value.evidence = input.files[0];
  }
};

const handleSubmit = () => {
  cpdStore.addRecord({
    ...newRecord.value,
    id: crypto.randomUUID(),
    evidenceUrl: newRecord.value.evidence ? URL.createObjectURL(newRecord.value.evidence) : null,
    createdAt: new Date().toISOString()
  });
  showAddModal.value = false;
  newRecord.value = {
    eventName: '',
    conductedBy: '',
    date: '',
    keyLearnings: '',
    hoursCompleted: 0,
    type: 'paper_presentation',
    evidence: null
  };
};

const activityTypes = [
  { id: 'paper_presentation', label: 'Paper Presentation', target: 5 },
  { id: 'content_development', label: 'Content Development', target: 5 },
  { id: 'examiner', label: 'Examiner', target: 5 },
  { id: 'training', label: 'Training', target: 5 },
  { id: 'workshop', label: 'Workshop', target: 5 }
];

const getCompletionPercentage = (type: string) => {
  const records = cpdStore.getRecordsByType(type);
  const totalHours = records.reduce((sum, record) => sum + record.hoursCompleted, 0);
  const target = activityTypes.find(t => t.id === type)?.target || 5;
  return Math.min((totalHours / target) * 100, 100);
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Continuous Professional Development</h1>
        <button 
          v-if="activeTab === 'records'"
          @click="showAddModal = true"
          class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
        >
          Add CPD Record
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['records', 'report', 'training'] as const"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
          @click="activeTab = tab"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Records Tab -->
      <div v-if="activeTab === 'records'" class="space-y-4">
        <div 
          v-for="record in cpdStore.records"
          :key="record.id"
          class="bg-white rounded-3xl border border-[#ECECEC] p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold">{{ record.eventName }}</h3>
              <div class="text-sm text-gray-600">Conducted by {{ record.conductedBy }}</div>
              <div class="mt-2 flex gap-2">
                <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                  {{ activityTypes.find(t => t.id === record.type)?.label }}
                </span>
                <span class="px-2 py-1 bg-green-50 text-green-700 rounded text-sm">
                  {{ record.hoursCompleted }} hours
                </span>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              {{ new Date(record.date).toLocaleDateString() }}
            </div>
          </div>

          <div class="text-gray-600 mb-4">{{ record.keyLearnings }}</div>

          <div v-if="record.evidenceUrl" class="flex items-center gap-2">
            <span class="text-sm text-gray-600">Evidence:</span>
            <a 
              :href="record.evidenceUrl"
              target="_blank"
              class="text-sm text-[#0447A8] hover:underline"
            >
              View Document
            </a>
          </div>
        </div>
      </div>

      <!-- Report Tab -->
      <div v-else-if="activeTab === 'report'" class="grid grid-cols-2 gap-6">
        <DashboardCard title="Hours Completed by Activity Type">
          <div class="space-y-4">
            <div 
              v-for="type in activityTypes"
              :key="type.id"
              class="space-y-2"
            >
              <div class="flex justify-between text-sm">
                <span>{{ type.label }}</span>
                <span>{{ getCompletionPercentage(type.id).toFixed(0) }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-[#0447A8]"
                  :style="{ width: `${getCompletionPercentage(type.id)}%` }"
                ></div>
              </div>
              <div class="text-xs text-gray-500">
                {{ cpdStore.getRecordsByType(type.id).reduce((sum, record) => sum + record.hoursCompleted, 0) }}
                out of {{ type.target }} hours
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Activities">
          <div class="space-y-3">
            <div 
              v-for="record in cpdStore.records.slice(0, 5)"
              :key="record.id"
              class="p-3 bg-gray-50 rounded-xl"
            >
              <div class="font-medium">{{ record.eventName }}</div>
              <div class="flex justify-between items-center mt-1 text-sm">
                <div class="text-gray-600">
                  {{ new Date(record.date).toLocaleDateString() }}
                </div>
                <div class="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                  {{ record.hoursCompleted }} hours
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>

      <!-- Training Tab -->
      <div v-else class="grid grid-cols-2 gap-6">
        <DashboardCard 
          v-for="course in cpdStore.availableCourses"
          :key="course.id"
        >
          <div class="space-y-4">
            <div class="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <img :src="course.thumbnail" :alt="course.title" class="w-full h-full object-cover" />
            </div>
            <div>
              <h3 class="text-lg font-semibold">{{ course.title }}</h3>
              <p class="text-gray-600 mt-2">{{ course.description }}</p>
              <div class="flex justify-between items-center mt-4">
                <div class="text-sm text-gray-600">
                  Duration: {{ course.duration }} hours
                </div>
                <button class="px-4 py-2 bg-[#0447A8] text-white rounded-xl">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>

    <!-- Add Record Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Add CPD Record</h2>
          <button 
            @click="showAddModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Event Name
            </label>
            <input
              v-model="newRecord.eventName"
              type="text"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Conducted By
            </label>
            <input
              v-model="newRecord.conductedBy"
              type="text"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Activity Type
            </label>
            <select
              v-model="newRecord.type"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            >
              <option v-for="type in activityTypes" :key="type.id" :value="type.id">
                {{ type.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              v-model="newRecord.date"
              type="date"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Hours Completed
            </label>
            <input
              v-model="newRecord.hoursCompleted"
              type="number"
              min="0"
              step="0.5"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Key Learnings
            </label>
            <textarea
              v-model="newRecord.keyLearnings"
              rows="3"
              required
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Evidence
            </label>
            <input
              type="file"
              @change="handleFileSelect"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
            />
          </div>

          <div class="flex justify-end gap-4">
            <button
              type="button"
              @click="showAddModal = false"
              class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
```