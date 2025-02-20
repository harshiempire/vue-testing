```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardStore } from '@/stores/dashboard';
import { useSubjectStore } from '@/stores/subject';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';
import NotificationPanel from '@/components/dashboard/NotificationPanel.vue';
import PerformanceChart from '@/components/dashboard/PerformanceChart.vue';
import TaskList from '@/components/dashboard/TaskList.vue';

const router = useRouter();
const dashboardStore = useDashboardStore();
const subjectStore = useSubjectStore();

// Mock class data
const currentClass = {
  name: '6A',
  totalStudents: 40,
  presentToday: 35
};

const attendancePercentage = computed(() => 
  Math.round((currentClass.presentToday / currentClass.totalStudents) * 100)
);

const performanceGroups = subjectStore.getStudentsByPerformance();

const performanceStats = computed(() => ({
  acceptable: (performanceGroups.excellent.length / currentClass.totalStudents) * 100,
  needsImprovement: (performanceGroups.needsImprovement.length / currentClass.totalStudents) * 100,
  unacceptable: (performanceGroups.unacceptable.length / currentClass.totalStudents) * 100
}));

const navigateToAttendance = () => {
  router.push('/attendance');
};

const navigateToTasks = () => {
  router.push('/tasks');
};
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-gray-600">Welcome back, Teacher!</p>
        </div>
        <div class="text-right">
          <div class="text-lg font-medium">Class {{ currentClass.name }}</div>
          <div class="text-sm text-gray-600">
            {{ currentClass.presentToday }}/{{ currentClass.totalStudents }} students present
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6 mb-6">
        <!-- Quick Stats -->
        <DashboardCard title="">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-600">Today's Attendance</div>
              <div class="text-2xl font-bold">{{ attendancePercentage }}%</div>
            </div>
            <button 
              @click="navigateToAttendance"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              Mark Attendance
            </button>
          </div>
        </DashboardCard>

        <DashboardCard title="">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-600">Pending Tasks</div>
              <div class="text-2xl font-bold">{{ dashboardStore.tasks.length }}</div>
            </div>
            <button 
              @click="navigateToTasks"
              class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
            >
              View All Tasks
            </button>
          </div>
        </DashboardCard>

        <DashboardCard title="">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-600">Class Average</div>
              <div class="text-2xl font-bold">{{ Math.round(subjectStore.averageClassScore) }}%</div>
            </div>
            <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-2xl">
              📊
            </div>
          </div>
        </DashboardCard>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <!-- Tasks Preview -->
        <DashboardCard title="">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Recent Tasks</h2>
            <button 
              @click="navigateToTasks"
              class="text-sm text-[#0447A8] hover:underline"
            >
              View All
            </button>
          </div>
          <TaskList filter="all" sortBy="deadline" />
        </DashboardCard>

        <!-- Notifications Section -->
        <DashboardCard title="">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Notifications</h2>
            <button 
              @click="dashboardStore.markAllNotificationsRead"
              class="text-sm text-[#0447A8]"
            >
              Mark all as read
            </button>
          </div>
          <NotificationPanel />
        </DashboardCard>

        <!-- Performance Chart -->
        <DashboardCard title="">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Class Performance</h2>
          </div>
          <PerformanceChart :stats="performanceStats" />
          <div class="mt-4 space-y-2">
            <div class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
                Acceptable (>75%)
              </span>
              <span>{{ Math.round(performanceStats.acceptable) }}%</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                Needs Improvement (50-75%)
              </span>
              <span>{{ Math.round(performanceStats.needsImprovement) }}%</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
               <span> Unacceptable (<49%)</span>
              <span>{{ Math.round(performanceStats.unacceptable) }}%</span>
              </span>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  </div>
</template>
```