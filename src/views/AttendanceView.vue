
<script setup lang="ts">
import { ref, computed } from 'vue';
import DashboardCard from '@/components/dashboard/DashboardCard.vue';

// Mock data
const students = ref([
  { id: '1', name: 'Alice Johnson', rollNo: '6A01', present: true },
  { id: '2', name: 'Bob Smith', rollNo: '6A02', present: true },
  { id: '3', name: 'Charlie Brown', rollNo: '6A03', present: true },
  { id: '4', name: 'Diana Miller', rollNo: '6A04', present: true },
  { id: '5', name: 'Edward Wilson', rollNo: '6A05', present: false }
]);
const currentClass = ref({
  name: '6A',
  totalStudents: 5,
  presentToday: 35
});

// Students list (fix: remove ref from each present field)

const attendancePercentage = computed(() => 
  Math.round((currentClass.value.presentToday / currentClass.value.totalStudents) * 100)
);

const markAllPresent = () => {
  students.value.forEach(student => {
    student.present = true;
  });
};

const markAllAbsent = () => {
  students.value.forEach(student => {
    student.present = false;
  });
};

const toggleAttendance = (student: any) => {
  student.present = !student.present;  // Fix: No need for `.value`
};

const saveAttendance = () => {
  // Calculate new attendance
  const presentCount = students.value.filter(s => s.present).length;
  currentClass.value.presentToday = presentCount;

  console.log('Saving attendance:', {
    date: new Date().toISOString(),
    class: currentClass.value.name,
    attendance: students.value.map(s => ({
      id: s.id,
      present: s.present
    }))
  });
};

// Attendance history
const attendanceHistory = ref([
  { date: '2024-03-07', present: 38, total: 40 },
  { date: '2024-03-06', present: 37, total: 40 },
  { date: '2024-03-05', present: 39, total: 40 },
  { date: '2024-03-04', present: 36, total: 40 },
  { date: '2024-03-03', present: 40, total: 40 }
]);
</script>


<template>
  <div class="min-h-screen bg-[#F5F5F5] pl-64 pt-16">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">Attendance</h1>
          <p class="text-gray-600">Class {{ currentClass.name }}</p>
        </div>
        <div class="text-right">
          <div class="text-lg font-medium">Today's Attendance</div>
          <div class="text-3xl font-bold text-[#0447A8]">
            {{ attendancePercentage }}%
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <!-- Attendance Marker -->
        <div class="col-span-8">
          <DashboardCard>
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-semibold">Mark Attendance</h2>
              <div class="text-sm text-gray-600">{{ new Date().toLocaleDateString() }}</div>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <div class="space-x-2">
                  <button
                    @click="markAllPresent"
                    class="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-lg"
                  >
                    Mark All Present
                  </button>
                  <button
                    @click="markAllAbsent"
                    class="px-3 py-1 text-sm bg-red-50 text-red-700 rounded-lg"
                  >
                    Mark All Absent
                  </button>
                </div>
                <button
                  @click="saveAttendance"
                  class="px-4 py-2 bg-[#0447A8] text-white rounded-xl"
                >
                  Save Attendance
                </button>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="student in students"
                  :key="student.id"
                  class="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                >
                  <div>
                    <div class="font-medium">{{ student.name }}</div>
                    <div class="text-sm text-gray-500">{{ student.rollNo }}</div>
                  </div>
                  <button
                    @click="toggleAttendance(student)"
                    class="px-3 py-1 text-sm rounded-lg"
                    :class="student.present ? 
                      'bg-green-50 text-green-700' : 
                      'bg-red-50 text-red-700'"
                  >
                    {{ student.present ? 'Present' : 'Absent' }}
                  </button>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>

        <!-- Attendance History -->
        <div class="col-span-4">
          <DashboardCard>
            <h2 class="text-lg font-semibold mb-4">Attendance History</h2>
            <div class="space-y-3">
              <div 
                v-for="record in attendanceHistory"
                :key="record.date"
                class="p-3 bg-gray-50 rounded-xl"
              >
                <div class="flex justify-between items-center mb-2">
                  <div class="font-medium">
                    {{ new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) }}
                  </div>
                  <div class="text-sm text-gray-600">
                    {{ record.present }}/{{ record.total }} present
                  </div>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-[#0447A8]"
                    :style="{ width: `${(record.present / record.total) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  </div>
</template>