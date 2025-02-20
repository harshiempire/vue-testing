```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useSubjectStore } from '@/stores/subject';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import ResourceUploader from '@/components/subject/ResourceUploader.vue';

const subjectStore = useSubjectStore();
const activeTab = ref('overview');
const showCreateNoticeModal = ref(false);
const showResourceUploader = ref(false);
const newNotice = ref({
  title: '',
  content: '',
  class: '6A',
  subject: 'Mathematics'
});

const selectedChapterId = ref('');

// Mock activity performance data
const activityPerformance = [
  {
    studentName: 'Alice Johnson',
    rollNo: '6A01',
    activities: [
      { name: 'Activity 1', score: 90, timeSpent: 45, status: 'completed' },
      { name: 'Activity 2', score: 85, timeSpent: 30, status: 'completed' },
      { name: 'Activity 3', score: null, timeSpent: null, status: 'pending' }
    ],
    averageScore: 87.5,
    completionRate: 66.7
  },
  {
    studentName: 'Bob Smith',
    rollNo: '6A02',
    activities: [
      { name: 'Activity 1', score: 75, timeSpent: 50, status: 'completed' },
      { name: 'Activity 2', score: 80, timeSpent: 35, status: 'completed' },
      { name: 'Activity 3', score: 88, timeSpent: 40, status: 'completed' }
    ],
    averageScore: 81,
    completionRate: 100
  },
  {
    studentName: 'Charlie Brown',
    rollNo: '6A03',
    activities: [
      { name: 'Activity 1', score: 95, timeSpent: 40, status: 'completed' },
      { name: 'Activity 2', score: null, timeSpent: null, status: 'pending' },
      { name: 'Activity 3', score: null, timeSpent: null, status: 'pending' }
    ],
    averageScore: 95,
    completionRate: 33.3
  }
];

const handleCreateNotice = () => {
  subjectStore.addNotice(newNotice.value);
  showCreateNoticeModal.value = false;
  newNotice.value = {
    title: '',
    content: '',
    class: '6A',
    subject: 'Mathematics'
  };
};

const handleResourceUpload = async (file: File, title: string, type: 'textbook' | 'notes' | 'video') => {
  const fakeUrl = URL.createObjectURL(file);
  
  subjectStore.addResource(selectedChapterId.value, {
    title,
    type,
    url: fakeUrl
  });
  
  showResourceUploader.value = false;
};

const performanceGroups = subjectStore.getStudentsByPerformance();
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Subject Management</h1>

      </div>

      <!-- Tabs --> 
      <div class="flex gap-4 mb-6">
        <button
          v-for="tab in ['overview', 'students', 'syllabus']"
          :key="tab"
          class="px-4 py-2 rounded-xl"
          :class="activeTab === tab ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700'"
          @click="activeTab = tab"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>

      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <DashboardCard title="Academic Performance">
            <div class="text-3xl font-bold mb-2">
              {{ Math.round(subjectStore.averageClassScore) }}%
            </div>
            <div class="text-sm text-gray-600">Average Class Score</div>
          </DashboardCard>

          <DashboardCard title="Upcoming Activities">
            <div class="space-y-3">
              <div 
                v-for="activity in subjectStore.upcomingActivities"
                :key="activity.id"
                class="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
              >
                <div>
                  <div class="font-medium">{{ activity.title }}</div>
                  <div class="text-sm text-gray-600">
                    Due: {{ new Date(activity.dueDate).toLocaleDateString() }}
                  </div>
                </div>
                <span 
                  class="px-3 py-1 text-sm rounded-lg"
                  :class="{
                    'bg-blue-50 text-blue-700': activity.type === 'test',
                    'bg-green-50 text-green-700': activity.type === 'assignment',
                    'bg-purple-50 text-purple-700': activity.type === 'activity'
                  }"
                >
                  {{ activity.type }}
                </span>
              </div>
            </div>
          </DashboardCard>
        </div>

        <!-- Activity Performance Table -->
        <DashboardCard title="Activity Performance">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
                  <th 
                    v-for="i in 3" 
                    :key="i" 
                    class="px-4 py-3 text-center text-sm font-medium text-gray-700"
                  >
                    Activity {{ i }}
                  </th>
                  <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Average Score</th>
                  <th class="px-4 py-3 text-center text-sm font-medium text-gray-700">Completion Rate</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr 
                  v-for="student in activityPerformance" 
                  :key="student.rollNo"
                  class="hover:bg-gray-50"
                >
                  <td class="px-4 py-3">
                    <div class="font-medium">{{ student.studentName }}</div>
                    <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                  </td>
                  <td 
                    v-for="activity in student.activities" 
                    :key="activity.name"
                    class="px-4 py-3 text-center"
                  >
                    <div v-if="activity.status === 'completed'">
                      <div class="font-medium">{{ activity.score }}%</div>
                      <div class="text-sm text-gray-500">{{ activity.timeSpent }} min</div>
                    </div>
                    <div v-else class="text-sm text-gray-500">
                      Pending
                    </div>
                  </td>
                  <td class="px-4 py-3 text-center">
                    <span 
                      class="px-2 py-1 text-sm rounded-lg"
                      :class="{
                        'bg-green-50 text-green-700': student.averageScore >= 85,
                        'bg-yellow-50 text-yellow-700': student.averageScore >= 70 && student.averageScore < 85,
                        'bg-red-50 text-red-700': student.averageScore < 70
                      }"
                    >
                      {{ student.averageScore }}%
                    </span>
                  </td>
                  <td class="px-4 py-3 text-center">
                    <span 
                      class="px-2 py-1 text-sm rounded-lg"
                      :class="{
                        'bg-green-50 text-green-700': student.completionRate === 100,
                        'bg-yellow-50 text-yellow-700': student.completionRate >= 50 && student.completionRate < 100,
                        'bg-red-50 text-red-700': student.completionRate < 50
                      }"
                    >
                      {{ student.completionRate }}%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>

      <!-- Students Tab -->
      <div v-else-if="activeTab === 'students'" class="space-y-6">
        <div v-for="(group, status) in performanceGroups" :key="status">
          <h3 class="text-lg font-semibold mb-3 capitalize">{{ status }}</h3>
          <div class="bg-white rounded-3xl border border-[#ECECEC] overflow-hidden">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Student</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA1</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA2</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">SA1</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">SA2</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA3</th>
                  <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">FA4</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="student in group" :key="student.id" class="hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <div class="font-medium">{{ student.name }}</div>
                    <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                  </td>
                  <td class="px-4 py-3">{{ student.scores.FA1 || '-' }}</td>
                  <td class="px-4 py-3">{{ student.scores.FA2 || '-' }}</td>
                  <td class="px-4 py-3">{{ student.scores.SA1 || '-' }}</td>
                  <td class="px-4 py-3">{{ student.scores.SA2 || '-' }}</td>
                  <td class="px-4 py-3">{{ student.scores.FA3 || '-' }}</td>
                  <td class="px-4 py-3">{{ student.scores.FA4 || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Syllabus Tab -->
      <div v-else-if="activeTab === 'syllabus'" class="space-y-6">
        <div 
          v-for="chapter in subjectStore.chapters" 
          :key="chapter.id"
          class="bg-white rounded-3xl border border-[#ECECEC] p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-semibold">{{ chapter.title }}</h3>
              <div class="mt-2">
                <span 
                  class="px-3 py-1 text-sm rounded-lg"
                  :class="chapter.completed ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'"
                >
                  {{ chapter.completed ? 'Completed' : 'In Progress' }}
                </span>
              </div>
            </div>
            <button
              @click="subjectStore.toggleChapterCompletion(chapter.id)"
              class="px-3 py-1 text-sm rounded-lg border"
              :class="chapter.completed ? 'border-red-200 text-red-700' : 'border-green-200 text-green-700'"
            >
              {{ chapter.completed ? 'Mark Incomplete' : 'Mark Complete' }}
            </button>
          </div>

          <div class="space-y-4">
            <div v-if="chapter.resources.length > 0">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Resources</h4>
              <div class="flex flex-wrap gap-2">
                <a
                  v-for="resource in chapter.resources"
                  :key="resource.id"
                  :href="resource.url"
                  target="_blank"
                  class="px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 flex items-center gap-2"
                >
                  <span>{{ resource.title }}</span>
                  <span class="text-xs text-gray-500">{{ resource.type }}</span>
                </a>
              </div>
            </div>

            <div v-if="selectedChapterId === chapter.id">
              <ResourceUploader
                v-if="showResourceUploader"
                @upload="handleResourceUpload"
              />
              <div v-else class="flex justify-end">
                <button
                  @click="showResourceUploader = true"
                  class="px-3 py-1 text-sm bg-[#0447A8] text-white rounded-lg"
                >
                  Add Resource
                </button>
              </div>
            </div>
            <button
              v-else
              @click="selectedChapterId = chapter.id"
              class="text-sm text-[#0447A8]"
            >
              + Add Resource
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Notice Modal -->
    <div v-if="showCreateNoticeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Create Notice</h2>
          <button 
            @click="showCreateNoticeModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              v-model="newNotice.title"
              type="text"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              placeholder="Notice title"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              v-model="newNotice.content"
              rows="4"
              class="w-full px-4 py-2 border border-[#ECECEC] rounded-xl"
              placeholder="Notice content"
            ></textarea>
          </div>

          <div class="flex justify-end gap-4">
            <button
              @click="showCreateNoticeModal = false"
              class="px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              @click="handleCreateNotice"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              Create Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```